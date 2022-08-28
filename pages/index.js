import {
  Button,
  Center,
  Text,
  Box,
  Anchor,
  Blockquote,
  Group,
} from "@mantine/core";
import { useContext, useEffect } from "react";
import { Context } from "../state/Context";

export default function Home() {
  const { pageInformation } = useContext(Context);
  const { hero, textHighlight, communityOwner, testimonials } = pageInformation;
  const { socialMediaLinks } = communityOwner;
  console.log(hero);

  return (
    <>
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
