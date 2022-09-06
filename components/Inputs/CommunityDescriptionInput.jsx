import { Center, Grid, Textarea, TextInput } from "@mantine/core";
import { useContext } from "react";
import { Context } from "../../state/Context";
import RemoveListItemButton from "../RemoveListItemButton";

const CommunityDescriptionInput = ({ index }) => {
  const { pageInformation, setPageInformation } = useContext(Context);
  const communityDescriptions = pageInformation["community Descriptions"];
  const communityDescription = communityDescriptions[index];
  const { communityDescriptionTitle, communityDescriptionPointer } =
    communityDescription;

  const communityDescriptionInput = function (e) {
    const { id, value } = e.target;
    communityDescription[id] = value;

    const updatedPageInformation = structuredClone(pageInformation);

    setPageInformation(updatedPageInformation);
  };

  return (
    <>
      <Grid>
        <Grid.Col span={12}>
          <TextInput
            label="Title"
            id="communityDescriptionTitle"
            value={communityDescriptionTitle}
            onChange={communityDescriptionInput}
          />
        </Grid.Col>
        <Grid.Col span={12}>
          <Textarea
            label="Point"
            value={communityDescriptionPointer}
            id="communityDescriptionPointer"
            onChange={communityDescriptionInput}
          />
        </Grid.Col>
      </Grid>
      <Center mt={18}>
        <RemoveListItemButton listName="community Descriptions" index={index} />
      </Center>
    </>
  );
};

export default CommunityDescriptionInput;
