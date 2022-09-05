import {
  CheckIcon,
  ColorSwatch,
  Group,
  Text,
  Tooltip,
  useMantineTheme,
} from "@mantine/core";
import { useContext, useEffect, useState } from "react";
import { Context } from "../../state/Context";

const AscentColorPicker = () => {
  const theme = useMantineTheme();
  const [checkedColor, setCheckedColor] = useState(theme.primaryColor);
  const { setPrimaryColor } = useContext(Context);

  useEffect(() => {
    setPrimaryColor(checkedColor);
  }, [checkedColor]);

  const colors = [
    "pink",
    "grape",
    "violet",
    "indigo",
    "blue",
    "cyan",
    "teal",
    "orange",
  ];

  const swatches = colors.map(color => (
    <Tooltip
      label={color}
      withArrow
      styles={theme => ({
        tooltip: { backgroundColor: theme.colors[color][6] },
      })}
    >
      <ColorSwatch
        component="button"
        key={color}
        sx={{ color: "#fff", cursor: "pointer" }}
        color={theme.colors[color][6]}
        onClick={() => setCheckedColor(color)}
      >
        {checkedColor === color && <CheckIcon width={10} />}
      </ColorSwatch>
    </Tooltip>
  ));

  return (
    <>
      <Text size="sm" weight={500}>
        Choose Ascent Color
      </Text>
      <Group mt={8} mb={16} position="start" spacing="xs">
        {swatches}
      </Group>
    </>
  );
};

export default AscentColorPicker;
