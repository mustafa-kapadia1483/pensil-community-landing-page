import { FileInput, Grid, TextInput } from "@mantine/core";
import { useContext } from "react";
import getUpdatedClonedPageObject from "../../helpers/getUpdatedClonedPageObject";
import { Context } from "../../state/Context";

const HeaderInput = () => {
  const { pageInformation, setPageInformation } = useContext(Context);

  const inputChangeHandler = e => {
    const { id, value } = e.target;
    setPageInformation(
      getUpdatedClonedPageObject(pageInformation, "header", id, value)
    );
  };

  return (
    <Grid>
      <Grid.Col span={6}>
        <FileInput label="Community Logo" placeholder="Click here to pick" />
      </Grid.Col>
      <Grid.Col span={6}>
        <TextInput
          id="communityName"
          label="Community Name:"
          description=""
          value={pageInformation.header.communityName}
          onChange={inputChangeHandler}
        />
      </Grid.Col>
    </Grid>
  );
};

export default HeaderInput;
