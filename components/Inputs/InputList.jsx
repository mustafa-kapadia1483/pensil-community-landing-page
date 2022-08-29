import { Accordion, Button, Center } from "@mantine/core";
import { useContext } from "react";
import { Blockquote, Plus } from "tabler-icons-react";
import { Context } from "../../state/Context";
import FaqInput from "./FaqInput";
import TestimonialInput from "./TestimonialInput";

const InputList = ({ listName }) => {
  const { pageInformation, setPageInformation } = useContext(Context);

  const createTestimonialHandler = function () {
    const newList = pageInformation[listName];
    newList.push(newList[newList.length - 1]);

    pageInformation[listName] = newList;
    const updatedPageInformation = structuredClone(pageInformation);

    setPageInformation(updatedPageInformation);
  };

  return (
    <>
      {pageInformation[listName].map((testimonial, index) => (
        <Accordion key={testimonial.name + index} variant="contained">
          <Accordion.Item value={`${listName}-${index}`}>
            <Accordion.Control
              style={{ textTransform: "capitalize" }}
              icon={<Blockquote />}
            >
              {`${listName.slice(0, -1)} #${index + 1}`}
            </Accordion.Control>
            <Accordion.Panel>
              {listName === "testimonials" && (
                <TestimonialInput index={index} />
              )}
              {listName === "faqs" && <FaqInput index={index} />}
            </Accordion.Panel>
          </Accordion.Item>
        </Accordion>
      ))}
      <Center mt={8} style={{ width: "100%" }}>
        <Button
          leftIcon={<Plus />}
          variant="subtle"
          onClick={createTestimonialHandler}
          style={{ textTransform: "capitalize" }}
        >
          add {listName.slice(0, -1)}
        </Button>
      </Center>
    </>
  );
};

export default InputList;
