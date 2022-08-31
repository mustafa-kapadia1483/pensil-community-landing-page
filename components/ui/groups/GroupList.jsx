import { Card, Image, Text } from "@mantine/core";
import { Carousel } from "@mantine/carousel";
import GroupCard from "./GroupCard";

const GroupList = ({ groups }) => {
  return (
    <Carousel
      slideSize="33.333333%"
      slidesToScroll={2}
      align="center"
      slideGap="md"
    >
      {groups.map((group, index) => (
        <Carousel.Slide key={"group-carousel-slide" + index}>
          <GroupCard group={group} />
        </Carousel.Slide>
      ))}
    </Carousel>
  );
};

export default GroupList;
