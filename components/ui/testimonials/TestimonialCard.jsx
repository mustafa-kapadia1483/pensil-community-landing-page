import {
  Avatar,
  Box,
  Card,
  Group,
  Stack,
  Text,
  ThemeIcon,
  Title,
} from "@mantine/core";
import { Quote } from "tabler-icons-react";

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
      sx={{
        height: "100%",
      }}
      radius="25px"
      shadow="0px 0px 8px 5px rgba(0, 0, 0, 0.1)"
    >
      <Stack sx={{ height: "100%" }} justify="space-between">
        <Text>
          <ThemeIcon
            sx={{ background: "none", transform: "rotate(180deg)" }}
            variant="light"
            size={15}
          >
            <Quote />
          </ThemeIcon>
          {testimonialContent}
          <ThemeIcon sx={{ background: "none" }} size={15} variant="light">
            <Quote />
          </ThemeIcon>
        </Text>
        <Group position="apart" mt={18}>
          <Box style={{ maxWidth: "70%", wordBreak: "break-word" }}>
            <Title order={4}>{testimonialName}</Title>
            <Text mt={4}>{testimonialCompany}</Text>
          </Box>
          <Avatar
            src={testinmonialImage}
            alt={testimonialName + " image"}
            radius="xl"
            size="lg"
          />
        </Group>
      </Stack>
    </Card>
  );
};

export default TestimonialCard;
