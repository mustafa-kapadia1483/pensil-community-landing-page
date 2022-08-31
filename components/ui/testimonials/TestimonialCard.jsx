import { Avatar, Box, Card, Group, Text, Title } from "@mantine/core";

const TestimonialCard = ({
  testimonial: {
    testimonialName,
    testimonialCompany,
    testimonialContent,
    testinmonialImage,
  },
}) => {
  return (
    <Card
      px={25}
      py={25}
      radius="25px"
      shadow="0px 0px 8px 5px rgba(0, 0, 0, 0.1)"
    >
      <Text>{testimonialContent}</Text>
      <Group position="apart" mt={18}>
        <Box style={{ maxWidth: "50%", wordBreak: "break-word" }}>
          <Title order={4}>{testimonialName}</Title>
          <Text mt={8}>{testimonialCompany}</Text>
        </Box>
        <Avatar
          src={testinmonialImage}
          alt={testimonialName + " image"}
          radius="xl"
          size="lg"
        />
      </Group>
    </Card>
  );
};

export default TestimonialCard;
