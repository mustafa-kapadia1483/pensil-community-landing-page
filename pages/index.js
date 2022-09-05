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
  Card,
} from "@mantine/core";
import Head from "next/head";
import { useContext } from "react";
import CommunityDescriptionsList from "../components/ui/community-descriptons/CommunityDescriptionsList";
import CommunityOwnerCard from "../components/ui/community-owner/CommunityOwnerCard";
import FaqList from "../components/ui/faqs/FaqList";
import GroupList from "../components/ui/groups/GroupList";
import TestimonialList from "../components/ui/testimonials/TestimonialList";
import TextHighlight from "../components/ui/text-highlight/TextHighlight";
import { Context } from "../state/Context";

export default function Home() {
  const { pageInformation } = useContext(Context);
  const { hero, textHighlight, communityOwner, groups, testimonials, faqs } =
    pageInformation;
  const communityDescriptions = pageInformation["community Descriptions"];

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
      <TextHighlight mt={100} py={70} textHighlight={textHighlight} />
      {communityDescriptions.length > 0 && (
        <Container mt={100}>
          <CommunityDescriptionsList
            communityDescriptions={communityDescriptions}
          />
        </Container>
      )}
      <Container mt={100}>
        <CommunityOwnerCard communityOwner={communityOwner} />
      </Container>
      {groups.length > 0 && (
        <Box
          mt={100}
          sx={theme => ({
            backgroundColor: theme.colors[theme.primaryColor][6],
          })}
          pt={50}
          pb={86}
        >
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
