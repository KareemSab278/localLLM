import { Box, Paper, Typography } from "@mui/material";
import { chatBubbleTheme, boxStyle } from "../Theme";
export { ChatBubbleComponent };

const ChatBubbleComponent = ({ message, isJarvisJr = false }) => {
  

  return (
    <Box sx={boxStyle(isJarvisJr)}>
      <Paper elevation={1} sx={{ ...chatBubbleTheme(isJarvisJr), maxWidth: { xs: "90%", md: "60%" } }}>
        <Typography>{message}</Typography>
      </Paper>
    </Box>
  );
};