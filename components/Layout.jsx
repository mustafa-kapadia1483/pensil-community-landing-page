import { useContext, useState } from "react";
import {
  AppShell,
  Navbar,
  Header,
  Footer,
  Text,
  MediaQuery,
  Burger,
  useMantineTheme,
  Group,
  Avatar,
  Button,
  ActionIcon,
  Center,
  Space,
  ScrollArea,
  Box,
  Accordion,
} from "@mantine/core";
import { ChevronLeft } from "tabler-icons-react";

import { Context } from "../state/Context";
import HeaderInput from "./Inputs/HeaderInput";
import HeroInput from "./Inputs/HeroInput";
import TextHighlightInput from "./Inputs/TextHighlightInput";
import CommunityOwnerInput from "./Inputs/CommunityOwnerInput";
import InputList from "./Inputs/InputList";

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
    name: "testimonials",
    component: <InputList listName="testimonials" />,
  },
  {
    name: "faqs",
    component: <InputList listName="faqs" />,
  },
];

export default function Layout({ children }) {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  const { pageInformation, setPageInformation } = useContext(Context);

  return (
    <AppShell
      styles={{
        main: {
          background:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      }}
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      navbar={
        <Navbar
          p="md"
          hiddenBreakpoint="sm"
          hidden={!opened}
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
                <ActionIcon>
                  <ChevronLeft size={18} />
                </ActionIcon>
              </Group>
              <Space h="md" />
              {inputArray.map(({ name, component }) => (
                <Accordion>
                  <Accordion.Item value={name}>
                    <Accordion.Control style={{ textTransform: "capitalize" }}>
                      {name}
                    </Accordion.Control>
                    <Accordion.Panel>{component}</Accordion.Panel>
                  </Accordion.Item>
                </Accordion>
              ))}
            </Box>
          </Navbar.Section>
        </Navbar>
      }
      footer={
        <Footer height={60} p="md">
          Application footer
        </Footer>
      }
      header={
        <Header height={70} p="md">
          <div
            style={{ display: "flex", alignItems: "center", height: "100%" }}
          >
            <MediaQuery largerThan="sm" styles={{ display: "none" }}>
              <Burger
                opened={opened}
                onClick={() => setOpened(() => !opened)}
                size="sm"
                color={theme.colors.gray[6]}
                mr="xl"
              />
            </MediaQuery>
            <Group style={{ width: "100%" }} position="apart">
              <Group>
                <Avatar
                  src={pageInformation.header.communityLogo}
                  alt="community logo"
                />
                <Text>{pageInformation.header.communityName}</Text>
              </Group>
              <Button>{pageInformation.header.headerButtonText}</Button>
            </Group>
          </div>
        </Header>
      }
    >
      {children}
    </AppShell>
  );
}
