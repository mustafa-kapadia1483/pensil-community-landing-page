import {
  Badge,
  Box,
  Button,
  Card,
  Group,
  Image,
  Stack,
  Text,
  ThemeIcon,
  Title,
  useMantineTheme,
} from "@mantine/core";
import { Plus, Users } from "tabler-icons-react";

const GroupCard = ({
  group: { groupName, groupThumbnail, groupDescription },
}) => {
  const theme = useMantineTheme();
  const badgeIcon = (
    <ThemeIcon
      variant="light"
      sx={{
        backgroundColor: "transparent",
        color:
          theme.colorScheme === "dark"
            ? theme.colors[theme.primaryColor][2]
            : theme.colors[theme.primaryColor][6],
      }}
    >
      <Users size={12} />
    </ThemeIcon>
  );

  return (
    <Card radius="lg">
      <Card.Section>
        <Image height={160} src={groupThumbnail} alt={groupName + "image"} />
      </Card.Section>
      <Title order={4} mt={16}>
        {groupName}
      </Title>
      <Text>{groupDescription}</Text>
      <Group position="apart" mt={32}>
        <Stack justify="center">
          <Badge variant="light" leftSection={badgeIcon}>
            5
          </Badge>
        </Stack>
        <Button radius="lg" size="xs" rightIcon={<Plus size={12} />}>
          Join
        </Button>
      </Group>
    </Card>
  );
};

export default GroupCard;
