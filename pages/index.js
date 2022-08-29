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
} from "@mantine/core";
import Image from "next/image";
import { useContext, useEffect } from "react";
import { Context } from "../state/Context";

export default function Home() {
  const { pageInformation } = useContext(Context);
  const { hero, textHighlight, communityOwner, testimonials } = pageInformation;
  const { socialMediaLinks } = communityOwner;
  console.log(hero);

  return (
    <>
      <Center
        mt={18}
        style={{
          width: "100%",
          flexDirection: "column",
          // gap: 10,
        }}
      >
        <Title
          order={1}
          mb={10}
          weight={700}
          style={{ maxWidth: "85%" }}
          align="center"
        >
          {hero.heroDescriptionText}
        </Title>
        <Button variant="subtle" size="xl" mb={10}>
          {hero.heroCtaText}
        </Button>
        <AspectRatio
          ratio={1080 / 720}
          style={{
            width: "90%",
            height: "60vh",
            borderRadius: "md",
            overflow: "none",
          }}
        >
          <Image
            src={hero.heroImageURL}
            layout="fill"
            objectFit="cover"
            alt="hero image"
          />
        </AspectRatio>
      </Center>
      <Center
        mt={50}
        py={70}
        style={{ backgroundColor: textHighlight.textHighlightBackgroundColor }}
      >
        <Title
          color={textHighlight.textHighLightColor}
          order={2}
          align="center"
          style={{ maxWidth: "85%" }}
        >
          {textHighlight.textHighlightContent}
        </Title>
      </Center>
      <Text>Description Text: {hero.heroDescriptionText}</Text>
      <Button>{hero.heroCtaText}</Button>
      <Center
        style={{
          width: "100%",
          height: 200,
          backgroundColor: textHighlight.textHighlightBackgroundColor,
        }}
      >
        <Text>{textHighlight.textHighlightContent}</Text>
      </Center>
      <Box>
        <Text>Owner name: {communityOwner.communityOwnerName}</Text>
        <Text>Owner Bio: {communityOwner.communityOwnerBio}</Text>
        {console.log(Object.keys(socialMediaLinks))}
        {Object.keys(socialMediaLinks).map(socialMediaLink => (
          <Anchor
            style={{ display: "block" }}
            href={socialMediaLinks[socialMediaLink]}
            key={socialMediaLink + "id"}
          >
            {socialMediaLink}: {socialMediaLinks[socialMediaLink]}
          </Anchor>
        ))}
        <Group>
          {testimonials.map(
            ({ testimonialName, testimonialCompany, testimonialContent }) => (
              <Blockquote
                key={testimonialName}
                cite={`${testimonialName}, ${testimonialCompany}`}
              >
                {testimonialContent}
              </Blockquote>
            )
          )}
        </Group>
      </Box>
    </>
  );
}
