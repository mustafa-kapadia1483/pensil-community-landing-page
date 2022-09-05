import { Card, Text, Title } from "@mantine/core";

const CommunityDescriptionsCard = ({
  communityDescription: {
    communityDescriptionTitle,
    communityDescriptionPointer,
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
      <Title order={3} mb="xs">
        {communityDescriptionTitle}
      </Title>
      <Text>{communityDescriptionPointer}</Text>
    </Card>
  );
};

export default CommunityDescriptionsCard;
