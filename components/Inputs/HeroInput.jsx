import { FileInput, Grid, Textarea, TextInput } from "@mantine/core";
import { useContext } from "react";
import getUpdatedClonedPageObject from "../../helpers/getUpdatedClonedPageObject";
import { Context } from "../../state/Context";

const HeroInput = () => {
  const { pageInformation, setPageInformation } = useContext(Context);

  const inputChangeHandler = e => {
    const { id, value } = e.target;
    setPageInformation(
      getUpdatedClonedPageObject(pageInformation, "hero", id, value)
    );
  };

  return (
    <Grid>
      <Grid.Col span={6}>
        <FileInput label="Hero Background" placeholder="Click here to pick" />
      </Grid.Col>
      <Grid.Col span={6}>
        <TextInput
          label="Hero CTA:"
          description=""
          id="heroCtaText"
          value={pageInformation.hero.heroCtaText}
          onChange={inputChangeHandler}
        />
      </Grid.Col>
      <Grid.Col span={12}>
        <Textarea
          placeholder="Start typing here..."
          label="Hero Description"
          id="heroDescriptionText"
          value={pageInformation.hero.heroDescriptionText}
          onChange={inputChangeHandler}
        />
      </Grid.Col>
    </Grid>
  );
};

export default HeroInput;
