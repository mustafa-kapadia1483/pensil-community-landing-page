import { Box, Container, Title } from "@mantine/core";

const TextHighlight = ({ textHighlight, ...attributes }) => {
  return (
    <Box
      sx={theme => ({
        backgroundColor: theme.colors[theme.primaryColor][6],
      })}
      {...attributes}
    >
      <Container>
        <Title
          color="white"
          order={2}
          align="center"
          mx="auto"
          style={{ maxWidth: "85%" }}
        >
          {textHighlight.textHighlightContent}
        </Title>
      </Container>
    </Box>
  );
};

export default TextHighlight;
