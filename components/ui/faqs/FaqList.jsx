import { Accordion, Text } from "@mantine/core";
import { Plus } from "tabler-icons-react";

const FaqList = ({ faqs }) => {
  return (
    <Accordion
      order={2}
      mt={25}
      radius="lg"
      styles={{
        item: {
          boxShadow: "0px 0px 8px 5px rgba(0, 0, 0, 0.1)",
          background: "#fff",
        },
        label: {
          fontWeight: "bold",
        },
      }}
      variant="separated"
      chevronPosition="left"
      chevron={<Plus size={16} />}
    >
      {faqs.map(({ faqQuestion, faqAnswer }, index) => (
        <Accordion.Item
          mb={30}
          key={faqQuestion + index}
          value={"faqs" + index}
        >
          <Accordion.Control>{faqQuestion}</Accordion.Control>
          <Accordion.Panel>
            <Text sx={{ textIndent: 32 }}>{faqAnswer}</Text>
          </Accordion.Panel>
        </Accordion.Item>
      ))}
    </Accordion>
  );
};

export default FaqList;
