import { Carousel } from "@mantine/carousel";
import { useMediaQuery } from "@mantine/hooks";
import GroupCard from "./GroupCard";

const GroupList = ({ groups }) => {
  const matches = useMediaQuery("(max-width: 700px)", true, {
    getInitialValueInEffect: false,
  });

  return (
    <Carousel
      slideSize={320}
      breakpoints={[
        { maxWidth: "md", slideSize: "50%" },
        { maxWidth: "sm", slideSize: "70%" },
      ]}
      slidesToScroll={matches ? 1 : 2}
      align="center"
      slideGap="md"
      dragFree
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
