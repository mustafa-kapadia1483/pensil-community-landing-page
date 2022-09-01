import { Accordion, Button, Center } from "@mantine/core";
import { useContext } from "react";
import { Blockquote, Plus } from "tabler-icons-react";
import { Context } from "../../state/Context";

const InputList = ({ listName, InputComponent, IconComponent }) => {
  const { pageInformation, setPageInformation } = useContext(Context);

  const createTestimonialHandler = function () {
    pageInformation[listName].push({});
    const updatedPageInformation = structuredClone(pageInformation);

    setPageInformation(updatedPageInformation);
  };

  return (
    <>
      <Accordion variant="contained">
        {pageInformation[listName].map((listItem, index) => (
          <Accordion.Item
            key={listName + "input" + index}
            value={`${listName}-${index}`}
          >
            <Accordion.Control
              style={{ textTransform: "capitalize" }}
              icon={<IconComponent size={16} />}
            >
              {`${listName.slice(0, -1)} #${index + 1}`}
            </Accordion.Control>
            <Accordion.Panel>
              <InputComponent index={index} />
            </Accordion.Panel>
          </Accordion.Item>
        ))}
      </Accordion>
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
