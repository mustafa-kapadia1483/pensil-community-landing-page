import { Accordion, Text } from "@mantine/core";
import { useColorScheme } from "@mantine/hooks";
import { Plus } from "tabler-icons-react";

const FaqList = ({ faqs }) => {
  return (
    <Accordion
      order={2}
      mt={25}
      radius="lg"
      styles={theme => ({
        item: {
          boxShadow: theme.shadows.sm,
          "&[data-active]": {
            "& h2 button div + div": {
              color: theme.colors[theme.primaryColor][6],
            },
          },
          // background: theme.colorScheme === "dark" ? "#1e1e1e" : "#fff",
        },
        label: {
          fontWeight: "bold",
        },
        chevron: {
          "&[data-rotate]": {
            transform: "rotate(45deg)",
            color: theme.colors[theme.primaryColor][6],
          },
        },
      })}
      variant="separated"
      chevronPosition="left"
      chevron={<Plus size={20} />}
    >
      {faqs.map(({ faqQuestion, faqAnswer }, index) => (
        <Accordion.Item
          mb={30}
          key={faqQuestion + index}
          value={"faqs" + index}
        >
          <Accordion.Control>{faqQuestion}</Accordion.Control>
          <Accordion.Panel>
            <Text ml={32}>{faqAnswer}</Text>
          </Accordion.Panel>
        </Accordion.Item>
      ))}
    </Accordion>
  );
};

export default FaqList;
