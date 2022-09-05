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

const TestimonialQuoteIcon = ({ rotate }) => (
  <ThemeIcon
    sx={theme => ({
      background: "none",
      transform: rotate && "rotate(180deg)",
      color: theme.colorScheme === "dark" && "#FFFFFF",
    })}
    variant="light"
    size={15}
  >
    <Quote />
  </ThemeIcon>
);

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
      shadow="sm"
    >
      <Stack sx={{ height: "100%" }} justify="space-between">
        <Text>
          <TestimonialQuoteIcon rotate />
          {testimonialContent}
          <TestimonialQuoteIcon />
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
