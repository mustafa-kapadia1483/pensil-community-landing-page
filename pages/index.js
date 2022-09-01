import {
  Button,
  Center,
  Text,
  Box,
  Group,
  Title,
  Image,
  ActionIcon,
  Container,
  Stack,
} from "@mantine/core";
import Head from "next/head";
import { useContext } from "react";
import {
  BrandFacebook,
  BrandInstagram,
  BrandLinkedin,
  BrandYoutube,
} from "tabler-icons-react";
import FaqList from "../components/ui/faqs/FaqList";
import GroupList from "../components/ui/groups/GroupList";
import TestimonialList from "../components/ui/testimonials/TestimonialList";
import { Context } from "../state/Context";

export default function Home() {
  const { pageInformation } = useContext(Context);
  const { hero, textHighlight, communityOwner, groups, testimonials, faqs } =
    pageInformation;
  const { socialMediaLinks } = communityOwner;

  return (
    <>
      <Head>
        <title>Pensil Community Landing Page Templage</title>
        <link
          rel="shortcut icon"
          href={pageInformation.header.communityLogo}
          type="image/png"
        />
      </Head>
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
      {groups.length > 0 && (
        <Box mt={100} sx={{ backgroundColor: "#8F00FF" }} pt={50} pb={86}>
          <Title color="white" align="center" mb={36}>
            Groups
          </Title>
          <GroupList groups={groups} />
        </Box>
      )}
      {testimonials.length > 0 && (
        <Container mt={100}>
          <Title order={2} align="center">
            Testimonials
          </Title>
          <TestimonialList testimonials={testimonials} />
        </Container>
      )}
      {faqs.length > 0 && (
        <Container mt={100}>
          <Title order={2} align="center">
            FAQs
          </Title>
          <FaqList faqs={faqs} />
        </Container>
      )}
    </>
  );
}
