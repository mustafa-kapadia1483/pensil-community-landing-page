import { useContext, useState } from "react";
import {
  AppShell,
  Navbar,
  Header,
  Text,
  Burger,
  useMantineTheme,
  Group,
  Avatar,
  Button,
  ActionIcon,
  Space,
  ScrollArea,
  Box,
  Accordion,
  useMantineColorScheme,
} from "@mantine/core";
import {
  ChevronLeft,
  Users,
  ZoomQuestion,
  Blockquote,
  Eye,
  BrowserCheck,
  MoonStars,
  Sun,
  LetterCase,
} from "tabler-icons-react";
import { showNotification } from "@mantine/notifications";

import { Context } from "../../state/Context";
import NavbarInputs from "./NavbarInputs";

export default function Layout({ children }) {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  const [preview, setPreview] = useState(false);
  const { pageInformation } = useContext(Context);
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";

  const previewHandler = function () {
    setPreview(!preview);
    setOpened(!opened);

    showNotification({
      title: "Preview Mode",
      message: "Currently in preview mode, click X to exit",
      onClose: () => {
        setPreview(false);
        setOpened(false);
      },
      icon: <Eye />,
      autoClose: false,
      styles: {
        icon: { backgroundColor: theme.colors[theme.primaryColor][6] },
      },
    });
  };

  const saveButtonHandler = function () {
    setPreview(!preview);
    setOpened(!opened);

    showNotification({
      title: "Your changes have been saved",
      message:
        "You won't be able to make changes to the page now, refresh the page to get editor again",
      styles: {
        root: {
          "&::before": { backgroundColor: theme.colors.green[7] },
        },
      },
    });
  };

  return (
    <AppShell
      styles={{
        main: {
          background:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
          paddingInline: opened && 0,
        },
      }}
      navbar={
        <Navbar
          p="md"
          hiddenBreakpoint="xxl"
          hidden={opened}
          width={{ sm: 200, lg: 400 }}
        >
          <Navbar.Section
            grow
            component={ScrollArea}
            style={{ overflowX: "hidden" }}
          >
            <Box style={{ width: "95%" }}>
              <Group position="apart">
                <Text>Landing Page Settings:</Text>
                <ActionIcon
                  variant="outline"
                  color={dark ? "yellow" : "blue"}
                  onClick={() => toggleColorScheme()}
                  title="Toggle color scheme"
                >
                  {dark ? <Sun size={18} /> : <MoonStars size={18} />}
                </ActionIcon>
              </Group>
              <Space h="md" />
              <NavbarInputs />
            </Box>
            <Group position="center" mt={16}>
              <Button
                color="gray.8"
                leftIcon={<Eye size={20} />}
                onClick={previewHandler}
              >
                Preview
              </Button>
              <Button
                styles={{
                  root: {
                    backgroundColor: theme.colors.green[7],
                    "&:hover": { backgroundColor: theme.colors.green[9] },
                  },
                }}
                onClick={saveButtonHandler}
                leftIcon={<BrowserCheck size={20} />}
              >
                Save
              </Button>
            </Group>
          </Navbar.Section>
        </Navbar>
      }
      header={
        <Header height={70} p="md">
          <div
            style={{ display: "flex", alignItems: "center", height: "100%" }}
          >
            {!preview && (
              <Burger
                opened={!opened}
                onClick={() => setOpened(() => !opened)}
                size="sm"
                color={theme.colors.gray[6]}
                mr="xl"
              />
            )}
            <Group style={{ width: "100%" }} position="apart">
              <Group>
                <Avatar
                  src={pageInformation.header.communityLogo}
                  alt="community logo"
                />
                <Text>{pageInformation.header.communityName}</Text>
              </Group>
              <Button radius="xl" px={30}>
                {pageInformation.header.headerButtonText}
              </Button>
            </Group>
          </div>
        </Header>
      }
    >
      {children}
    </AppShell>
  );
}
