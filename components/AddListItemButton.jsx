import { Button } from "@mantine/core";
import { useContext } from "react";
import { Plus } from "tabler-icons-react";
import { Context } from "../state/Context";

const AddListItemButton = ({ listName }) => {
  const { pageInformation, setPageInformation } = useContext(Context);

  const createTestimonialHandler = function () {
    pageInformation[listName].push({});
    const updatedPageInformation = structuredClone(pageInformation);

    setPageInformation(updatedPageInformation);
  };

  return (
    <Button
      leftIcon={<Plus />}
      variant="subtle"
      onClick={createTestimonialHandler}
      style={{ textTransform: "capitalize" }}
    >
      add {listName.slice(0, -1)}
    </Button>
  );
};

export default AddListItemButton;
