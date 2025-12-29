import KeyboardArrowUpRoundedIcon from "@mui/icons-material/KeyboardArrowUpRounded";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { ButtonComponent } from "./ButtonComponent";
import { inputFieldStyle, submitButtonStyle, inputFieldContainerStyle } from "../Theme";
export { InputField };

const handleSubmit = (input) => {
  console.log(`Submitted: ${input}`);
};

const InputField = () => {
  const [inputValue, setInputValue] = useState("");
  return (
    <Box sx={inputFieldContainerStyle}>
      <TextField
        fullWidth
        autoComplete="on"
        id="prompt-field"
        slotProps={{ input: { style: { color: "#dfdfdfff" } } }}
        multiline
        maxRows={10}
        minRows={2}
        variant="standard"
        onChange={(input) => setInputValue(input.target.value)}
        onKeyDown={(input) => {
          if (input.key === "Enter" && input.ctrlKey) {
            handleSubmit(inputValue);
            setInputValue("");
          }
        }}
        value={inputValue}
        sx={inputFieldStyle}
      />
      <ButtonComponent
        style={submitButtonStyle}
        isDisabled={inputValue.trim() === ""}
        label={<KeyboardArrowUpRoundedIcon />}
        onClick={() => {
          handleSubmit(inputValue);
          setInputValue("");
        }}
      />
    </Box>
  );
};