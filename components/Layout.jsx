import { useContext, useState } from "react";
import {
  AppShell,
  Navbar,
  Header,
  Text,
  MediaQuery,
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
} from "@mantine/core";
import {
  ChevronLeft,
  Users,
  ZoomQuestion,
  Blockquote,
  Eye,
  BrowserCheck,
} from "tabler-icons-react";

import { Context } from "../state/Context";
import HeaderInput from "./Inputs/HeaderInput";
import HeroInput from "./Inputs/HeroInput";
import TextHighlightInput from "./Inputs/TextHighlightInput";
import CommunityOwnerInput from "./Inputs/CommunityOwnerInput";
import InputList from "./Inputs/InputList";
import TestimonialInput from "./Inputs/TestimonialInput";
import FaqInput from "./Inputs/FaqInput";
import GroupInput from "./Inputs/GroupInput";
import { showNotification } from "@mantine/notifications";

const inputArray = [
  {
    name: "header",
    component: <HeaderInput />,
  },
  {
    name: "hero",
    component: <HeroInput />,
  },
  {
    name: "text highlight",
    component: <TextHighlightInput />,
  },
  {
    name: "community owner",
    component: <CommunityOwnerInput />,
  },
  {
    name: "groups",
    component: (
      <InputList
        listName="groups"
        InputComponent={GroupInput}
        IconComponent={Users}
      />
    ),
  },
  {
    name: "testimonials",
    component: (
      <InputList
        listName="testimonials"
        InputComponent={TestimonialInput}
        IconComponent={Blockquote}
      />
    ),
  },
  {
    name: "faqs",
    component: (
      <InputList
        listName="faqs"
        InputComponent={FaqInput}
        IconComponent={ZoomQuestion}
      />
    ),
  },
];

export default function Layout({ children }) {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  const [preview, setPreview] = useState(false);
  const { pageInformation } = useContext(Context);

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
      // navbarOffsetBreakpoint="xl"
      navbar={
        <Navbar
          p="md"
          hiddenBreakpoint="xl"
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
              </Group>
              <Space h="md" />
              {inputArray.map(({ name, component }) => (
                <Accordion key={name}>
                  <Accordion.Item value={name}>
                    <Accordion.Control style={{ textTransform: "capitalize" }}>
                      {name}
                    </Accordion.Control>
                    <Accordion.Panel>{component}</Accordion.Panel>
                  </Accordion.Item>
                </Accordion>
              ))}
            </Box>
            <Group position="center" mt={16}>
              <Button leftIcon={<Eye size={20} />} onClick={previewHandler}>
                Preview
              </Button>
              <Button
                styles={{
                  root: {
                    backgroundColor: theme.colors.green[7],
                    "&:hover": { backgroundColor: theme.colors.green[9] },
                  },
                }}
                leftIcon={<BrowserCheck size={20} />}
              >
                Save
              </Button>
            </Group>
          </Navbar.Section>
        </Navbar>
      }
      // footer={
      //   <Footer height={60} p="md">
      //     Application footer
      //   </Footer>
      // }
      header={
        <Header height={70} p="md">
          <div
            style={{ display: "flex", alignItems: "center", height: "100%" }}
          >
            {/* <MediaQuery largerThan="sm" styles={{ display: "none" }}> */}
            {!preview && (
              <Burger
                opened={!opened}
                onClick={() => setOpened(() => !opened)}
                size="sm"
                color={theme.colors.gray[6]}
                mr="xl"
              />
            )}
            {/* </MediaQuery> */}
            <Group style={{ width: "100%" }} position="apart">
              <Group>
                <Avatar
                  src={pageInformation.header.communityLogo}
                  alt="community logo"
                />
                <Text>{pageInformation.header.communityName}</Text>
              </Group>
              <Button
                radius="xl"
                px={30}
                style={{ backgroundColor: "#A635FF" }}
              >
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
