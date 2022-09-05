import { Grid } from "@mantine/core";
import TestimonialCard from "./TestimonialCard";

const TestimonialList = ({ testimonials }) => {
  return (
    <Grid mt={18} gutter="xl">
      {testimonials.map((testimonial, index) => (
        <Grid.Col sm={6} md={6} lg={4} key={"testimonials-list-" + index}>
          <TestimonialCard testimonial={testimonial} />
        </Grid.Col>
      ))}
    </Grid>
  );
};

export default TestimonialList;
