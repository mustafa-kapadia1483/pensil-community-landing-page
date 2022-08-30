import {
  Button,
  Center,
  Text,
  Box,
  Anchor,
  Blockquote,
  Group,
  Title,
  AspectRatio,
  Image,
  Grid,
  Avatar,
  ActionIcon,
  Container,
  Stack,
  Card,
  MediaQuery,
  Accordion,
} from "@mantine/core";
import { useContext } from "react";
import {
  BrandFacebook,
  BrandInstagram,
  BrandLinkedin,
  BrandYoutube,
  Plus,
} from "tabler-icons-react";
import { Context } from "../state/Context";

export default function Home() {
  const { pageInformation } = useContext(Context);
  const { hero, textHighlight, communityOwner, testimonials, faqs } =
    pageInformation;
  const { socialMediaLinks } = communityOwner;
  // console.log(hero);

  return (
    <>
      <Container mt={18}>
        <Title
          order={1}
          mb={10}
          weight={700}
          style={{ maxWidth: "85%" }}
          mx="auto"
          align="center"
        >
          {hero.heroDescriptionText}
        </Title>
        <Center>
          <Button variant="subtle" size="xl" mb={10} color="#A635FF">
            {hero.heroCtaText}
          </Button>
        </Center>
        <Image src={hero.heroImageURL} alt="hero image" />
      </Container>
      <Box
        mt={100}
        py={70}
        style={{ backgroundColor: textHighlight.textHighlightBackgroundColor }}
      >
        <Container>
          <Title
            color={textHighlight.textHighLightColor}
            order={2}
            align="center"
            mx="auto"
            style={{ maxWidth: "85%" }}
          >
            {textHighlight.textHighlightContent}
          </Title>
        </Container>
      </Box>
      <Container>
        <Group
          spacing="xl"
          mt={100}
          py={50}
          position="center"
          style={{
            borderRadius: "8px",
            // height: "40vh",
            boxShadow: "0px 0px 8px 5px rgba(0, 0, 0, 0.1)",
            width: "100%",
          }}
        >
          <img
            src={communityOwner.communityOwnerImage}
            alt="community owner image"
            style={{
              aspectRatio: "1 / 1",
              width: "30%",
              borderRadius: "50%",
              overflow: "hidden",
              objectFit: "cover",
            }}
          />
          <Stack
            sx={{
              "@media (max-width: 780px)": {
                textAlign: "center",
                paddingInline: "1.25em",
              },
            }}
          >
            <Title order={3}>{communityOwner.communityOwnerName}</Title>
            <Text style={{ maxWidth: "30em" }}>
              {communityOwner.communityOwnerBio}
            </Text>
            <Group
              sx={{
                "@media (max-width: 780px)": {
                  justifyContent: "center",
                },
              }}
            >
              <ActionIcon
                variant="filled"
                style={{
                  borderRadius: "50%",
                  background: "#1877F2",
                }}
                component="a"
                href={socialMediaLinks.facebookLink}
              >
                <BrandFacebook />
              </ActionIcon>
              <ActionIcon
                variant="filled"
                style={{
                  borderRadius: "50%",
                  background:
                    "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)",
                }}
                component="a"
                href={socialMediaLinks.instagramLink}
              >
                <BrandInstagram />
              </ActionIcon>
              <ActionIcon
                variant="filled"
                style={{
                  borderRadius: "50%",
                  background: "#FF0000",
                }}
                component="a"
                href={socialMediaLinks.youtubeChannelLink}
              >
                <BrandYoutube />
              </ActionIcon>
              <ActionIcon
                variant="filled"
                style={{
                  borderRadius: "50%",
                  background: "#2867B2",
                }}
                component="a"
                href={socialMediaLinks.linkedinLink}
              >
                <BrandLinkedin />
              </ActionIcon>
            </Group>
          </Stack>
        </Group>
      </Container>
      <Container mt={100}>
        <Title order={2} align="center">
          Testimonials
        </Title>
        <Grid mt={18} gutter="xl">
          {testimonials.map(
            ({
              testimonialName,
              testimonialCompany,
              testimonialContent,
              testinmonialImage,
            }) => (
              <Grid.Col
                sm={6}
                md={6}
                lg={4}
                key={testimonialName + testimonialCompany}
              >
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
              </Grid.Col>
            )
          )}
        </Grid>
      </Container>
      <Container mt={100}>
        <Title order={2} align="center">
          FAQs
        </Title>
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
              key={faqQuestion}
              value={faqQuestion + index}
            >
              <Accordion.Control>{faqQuestion}</Accordion.Control>
              <Accordion.Panel>{faqAnswer}</Accordion.Panel>
            </Accordion.Item>
          ))}
        </Accordion>
      </Container>
    </>
  );
}
