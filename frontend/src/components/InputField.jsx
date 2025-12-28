import { BorderColor } from "@mui/icons-material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useState } from "react";

export { InputField };

const inputFieldStyle = {
  width: "70%",
  position: "fixed",
  left: "50%",
  bottom: 10,
  transform: "translateX(-50%)",
  padding: "10px 0",
  borderRadius: "8px",
  backgroundColor: "#0000001a",
  zIndex: 1300,
  p: 1, border: '1px solid #dfdfdf25'
};

const handleSubmit = (input) => {
  alert(`Submitted: ${input.target.value}`);
};

const InputField = () => {
    const [inputValue, setInputValue] = useState("");
    return (
    <Box sx={inputFieldStyle}>
      <TextField
        fullWidth
        autoComplete
        id="prompt-field"
        slotProps={{ input: { style: { color: "#dfdfdfff"} } }}
        multiline
        rows={2}
        maxRows={10}
        variant="standard"
        onChange={(input) => setInputValue(input.target.value)}
        onKeyDown={(input) => {
          if (input.key === "Enter" && input.ctrlKey) {
            handleSubmit(input);
            setInputValue("");
          }
        }}
        value={inputValue}
      />
    </Box>
  );
};
