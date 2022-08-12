import React from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Fab from "@mui/material/Fab";
import Typography from "@mui/material/Typography";

export default function MinimizeButton() {
  const [variant, setVariant] = React.useState("extended");
  const [size, setSize] = React.useState("large");
  const [text, setText] = React.useState("свернуть");
  const [opacity, setOpacity] = React.useState(1);

  const textChabge = () => {
    for (let i = text.length; i--; i > 0) {
      setInterval(() => {
        setText(text.substring(0, i - 1))
      }, 1000);
    }
    if (text.length === 0) {
      setOpacity(0);
      setVariant("circular");
      setSize("small");
    }
  };

  React.useEffect(() => {
    textChabge();
  });

  return (
    <Fab
      variant={variant}
      color="primary"
      size={size}
      sx={{ opacity: { opacity } }}
    >
      <Typography variant="body1" color="white">
        {text}
      </Typography>
      <KeyboardArrowUpIcon />
    </Fab>
  );
}
