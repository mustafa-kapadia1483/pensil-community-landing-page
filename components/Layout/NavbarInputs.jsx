import { Accordion } from "@mantine/core";
import {
  Blockquote,
  LetterCase,
  Users,
  ZoomQuestion,
} from "tabler-icons-react";
import AscentColorPicker from "../Inputs/AscentColorPicker";
import CommunityDescriptionInput from "../Inputs/CommunityDescriptionInput";
import CommunityOwnerInput from "../Inputs/CommunityOwnerInput";
import FaqInput from "../Inputs/FaqInput";
import GroupInput from "../Inputs/GroupInput";
import HeaderInput from "../Inputs/HeaderInput";
import HeroInput from "../Inputs/HeroInput";
import InputList from "../Inputs/InputList";
import TestimonialInput from "../Inputs/TestimonialInput";
import TextHighlightInput from "../Inputs/TextHighlightInput";

const inputArray = [
  {
    name: "theme color",
    component: <AscentColorPicker />,
  },
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
    name: "community descriptions",
    component: (
      <InputList
        listName="community Descriptions"
        InputComponent={CommunityDescriptionInput}
        IconComponent={LetterCase}
      />
    ),
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

const NavbarInputs = () => {
  return (
    <>
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
    </>
  );
};

export default NavbarInputs;
