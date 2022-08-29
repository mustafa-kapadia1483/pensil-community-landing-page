import { FileInput, Grid, Textarea, TextInput } from "@mantine/core";
import { useContext, useEffect, useState } from "react";
import getUpdatedClonedPageObject from "../../helpers/getUpdatedClonedPageObject";
import { Context } from "../../state/Context";

const HeroInput = () => {
  const { pageInformation, setPageInformation } = useContext(Context);
  const [heroImageValue, setHeroImageValue] = useState(null);

  useEffect(() => {
    if (heroImageValue) {
      pageInformation.hero.heroImageURL = URL.createObjectURL(heroImageValue);
      const updatedPageInformation = structuredClone(pageInformation);
      setPageInformation(updatedPageInformation);
    }
  }, [heroImageValue]);

  const inputChangeHandler = e => {
    const { id, value } = e.target;
    setPageInformation(
      getUpdatedClonedPageObject(pageInformation, "hero", id, value)
    );
  };

  return (
    <Grid>
      <Grid.Col span={6}>
        <FileInput
          label="Hero Background"
          placeholder="Click here to pick"
          value={heroImageValue}
          onChange={setHeroImageValue}
        />
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
          autosize
          minRows={3}
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
