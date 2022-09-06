import { Center, FileInput, Grid, Textarea, TextInput } from "@mantine/core";
import { useContext, useEffect, useState } from "react";
import { Context } from "../../state/Context";
import RemoveListItemButton from "../RemoveListItemButton";

const GroupInput = ({ index }) => {
  const { pageInformation, setPageInformation } = useContext(Context);
  const group = pageInformation.groups[index];

  const [groupThumbnailValue, setGroupThumbnailValue] = useState(null);

  useEffect(() => {
    if (groupThumbnailValue) {
      group.groupThumbnail = URL.createObjectURL(groupThumbnailValue);
      pageInformation.groups[index] = group;
      const updatedPageInformation = structuredClone(pageInformation);

      setPageInformation(updatedPageInformation);
    }
  }, [groupThumbnailValue]);

  const groupInputHandler = function (e) {
    const { id, value } = e.target;
    group[id] = value;

    const updatedPageInformation = structuredClone(pageInformation);

    setPageInformation(updatedPageInformation);
  };

  return (
    <>
      <Grid>
        <Grid.Col span={6}>
          <TextInput
            id="groupName"
            label="Group Name"
            onChange={groupInputHandler}
            value={group.groupName}
          />
        </Grid.Col>
        <Grid.Col span={6}>
          <FileInput
            label="Group Thumbnail"
            value={groupThumbnailValue}
            onChange={setGroupThumbnailValue}
          />
        </Grid.Col>
        <Grid.Col span={12}>
          <Textarea
            id="groupDescription"
            label="Group Description"
            onChange={groupInputHandler}
            value={group.groupDescription}
          />
        </Grid.Col>
      </Grid>
      <Center mt={18}>
        <RemoveListItemButton listName="groups" index={index} />
      </Center>
    </>
  );
};

export default GroupInput;
