import { Textarea } from "@mantine/core";
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
    <Textarea
      label="Text Highlight:"
      id="textHighlightContent"
      autosize
      minRows={3}
      value={pageInformation.textHighlight.textHighlightContent}
      onChange={inputChangeHandler}
    />
  );
};

export default TextHighlightInput;
