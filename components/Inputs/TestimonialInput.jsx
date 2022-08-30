import {
  Button,
  Center,
  FileInput,
  Grid,
  Textarea,
  TextInput,
} from "@mantine/core";
import { useContext, useEffect, useState } from "react";
import { Minus } from "tabler-icons-react";
import { Context } from "../../state/Context";

const TestimonialInput = ({ index }) => {
  const { pageInformation, setPageInformation } = useContext(Context);
  const { testimonials } = pageInformation;
  const testimonial = testimonials[index];

  const [testimonialImageValue, setTestimonialImageValue] = useState(null);

  useEffect(() => {
    if (testimonialImageValue) {
      testimonial.testinmonialImage = URL.createObjectURL(
        testimonialImageValue
      );
      pageInformation.testimonials[index] = testimonial;
      const updatedPageInformation = structuredClone(pageInformation);

      setPageInformation(updatedPageInformation);
    }
  }, [testimonialImageValue]);

  const testimonialInputHandler = function (e) {
    const { id, value } = e.target;
    testimonial[id] = value;

    const updatedPageInformation = structuredClone(pageInformation);
    updatedPageInformation.testimonials[index] = testimonial;

    setPageInformation(updatedPageInformation);
  };

  const removeTestimonialHandler = function () {
    const updatedPageInformation = structuredClone(pageInformation);
    testimonials.pop();
    updatedPageInformation.testimonials = testimonials;

    setPageInformation(updatedPageInformation);
  };

  return (
    <>
      <Grid>
        <Grid.Col span={6}>
          <TextInput
            label="Name"
            id="testimonialName"
            value={testimonial.testimonialName}
            onChange={testimonialInputHandler}
          />
        </Grid.Col>
        <Grid.Col span={6}>
          <TextInput
            label="College / Company"
            id="testimonialCompany"
            value={testimonial.testimonialCompany}
            onChange={testimonialInputHandler}
          />
        </Grid.Col>
        <Grid.Col span={12}>
          <Textarea
            placeholder="Start typing here..."
            label="Testimonial"
            id="testimonialContent"
            value={testimonial.testimonialContent}
            onChange={testimonialInputHandler}
          />
        </Grid.Col>
        <Grid.Col span={12}>
          <FileInput
            label="Testimonial Image"
            placeholder="Pick your image"
            value={testimonialImageValue}
            onChange={setTestimonialImageValue}
          />
        </Grid.Col>
      </Grid>
      <Center mt={8}>
        <Button
          size="xs"
          variant="subtle"
          color="red"
          leftIcon={<Minus />}
          onClick={removeTestimonialHandler}
        >
          Remove Testimonial
        </Button>
      </Center>
    </>
  );
};

export default TestimonialInput;
