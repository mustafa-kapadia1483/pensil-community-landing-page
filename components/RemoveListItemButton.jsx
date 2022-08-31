import { Button, Center } from "@mantine/core";
import { useContext } from "react";
import { Minus, X } from "tabler-icons-react";
import { Context } from "../state/Context";
import { showNotification } from "@mantine/notifications";

const RemoveListItemButton = ({ listName, index }) => {
  const { pageInformation, setPageInformation } = useContext(Context);
  const singularlistName = listName.slice(0, -1);

  const removeListItemHandler = function () {
    if (pageInformation[listName].length === 1) {
      showNotification({
        color: "red",
        title: "Cannot remove testimonial " + singularlistName,
        message: "You need to have atleast one " + singularlistName,
        icon: <X />,
      });

      return;
    }
    pageInformation[listName].splice(index, 1);
    const updatedPageInformation = structuredClone(pageInformation);

    setPageInformation(updatedPageInformation);
  };

  return (
    <Button
      size="xs"
      variant="subtle"
      color="red"
      leftIcon={<Minus />}
      onClick={removeListItemHandler}
    >
      Remove {singularlistName}
    </Button>
  );
};

export default RemoveListItemButton;
