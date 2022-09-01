import { Button, Center } from "@mantine/core";
import { useContext } from "react";
import { Minus } from "tabler-icons-react";
import { Context } from "../state/Context";
import { showNotification } from "@mantine/notifications";

const RemoveListItemButton = ({ listName, index }) => {
  const { pageInformation, setPageInformation } = useContext(Context);
  const singularlistName = listName.slice(0, -1);

  const removeListItemHandler = function () {
    if (pageInformation[listName].length === 1) {
      showNotification({
        color: "red",
        title: "All " + listName + " removed",
        message: `As a result ${listName} section is removed, add one ${singularlistName} to restore the section`,
        styles: theme => ({
          root: {
            backgroundColor: theme.colors.red[6],
            borderColor: theme.colors.red[6],
            "&::before": { backgroundColor: theme.white },
          },
          title: { color: theme.white },
          description: { color: theme.white },
          closeButton: {
            color: theme.white,
            "&:hover": { backgroundColor: theme.colors.blue[7] },
          },
        }),
      });
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
