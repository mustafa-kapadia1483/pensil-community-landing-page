import { Center, Grid, Textarea, TextInput } from "@mantine/core";
import { useContext } from "react";
import { Context } from "../../state/Context";
import RemoveListItemButton from "../RemoveListItemButton";

const FaqInput = ({ index }) => {
  const { pageInformation, setPageInformation } = useContext(Context);
  const { faqs } = pageInformation;
  const faq = faqs[index];

  const faqInputHandler = function (e) {
    const { id, value } = e.target;
    faq[id] = value;

    const updatedPageInformation = structuredClone(pageInformation);

    setPageInformation(updatedPageInformation);
  };

  return (
    <>
      <Grid>
        <Grid.Col span={12}>
          <TextInput
            label="Question"
            id="faqQuestion"
            value={faq.faqQuestion || ""}
            onChange={faqInputHandler}
          />
        </Grid.Col>
        <Grid.Col span={12}>
          <Textarea
            label="Answer"
            placeholder="Write you answer here..."
            id="faqAnswer"
            value={faq.faqAnswer || ""}
            onChange={faqInputHandler}
          />
        </Grid.Col>
      </Grid>
      <Center mt={18}>
        <RemoveListItemButton listName="faqs" index={index} />
      </Center>
    </>
  );
};

export default FaqInput;
