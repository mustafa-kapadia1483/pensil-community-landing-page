import { Card, Image, Text } from "@mantine/core";

const GroupCard = ({
  group: { groupName, groupThumbnail, groupDescription },
}) => {
  return (
    <Card radius="lg">
      <Card.Section>
        <Image height={160} src={groupThumbnail} alt={groupName + "image"} />
      </Card.Section>
      <Text mt={16}>{groupName}</Text>
      <Text>{groupDescription}</Text>
    </Card>
  );
};

export default GroupCard;
