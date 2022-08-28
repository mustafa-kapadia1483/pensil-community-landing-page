import { Group, TextInput } from "@mantine/core";
import { useContext } from "react";
import getUpdatedClonedPageObject from "../../helpers/getUpdatedClonedPageObject";
import { Context } from "../../state/Context";

const TextHighlightInput = () => {
  const { pageInformation, setPageInformation } = useContext(Context);

  const inputChangeHandler = e => {
    const { id, value } = e.target;
    setPageInformation(
      getUpdatedClonedPageObject(pageInformation, "textHighlight", id, value)
    );
  };

  return (
    <Group>
      <TextInput
        label="Text Highlight:"
        id="textHighlightContent"
        value={pageInformation.textHighlight.textHighlightContent}
        onChange={inputChangeHandler}
      />
    </Group>
  );
};

export default TextHighlightInput;
