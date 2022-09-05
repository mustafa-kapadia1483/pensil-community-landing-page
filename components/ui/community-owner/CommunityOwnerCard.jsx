import { ActionIcon, Card, Group, Stack, Text, Title } from "@mantine/core";
import {
  BrandFacebook,
  BrandInstagram,
  BrandLinkedin,
  BrandYoutube,
} from "tabler-icons-react";

const CommunityOwnerCard = ({ communityOwner }) => {
  const { socialMediaLinks } = communityOwner;
  return (
    <Card shadow="lg" radius="lg">
      <Group
        spacing="xl"
        py={50}
        position="center"
        style={{
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
            objectPosition: "center",
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
    </Card>
  );
};

export default CommunityOwnerCard;
