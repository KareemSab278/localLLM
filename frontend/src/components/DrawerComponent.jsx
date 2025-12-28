import { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuTwoToneIcon from "@mui/icons-material/MenuTwoTone";
import { drawerTheme } from "../Theme";
export { DrawerComponent };

const DrawerComponent = ({ options = [] }) => {
  // maybe i should keep options in redux or ls instead of prop...
  const [open, setOpen] = useState(false);
  const drawerStyle = {
    width: 200,
    backgroundColor: drawerTheme.paper.sx.backgroundColor,
    color: drawerTheme.paper.sx.color,
  };
  const burgerSize = {
    md: { fontSize: 32, color: drawerTheme.paper.sx.color },
    lg: { fontSize: 40, color: drawerTheme.paper.sx.color },
    xl: { fontSize: 48, color: drawerTheme.paper.sx.color },
  };

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
  
  options.unshift({
    text: "New Chat",
    action: () => {
      alert("New Chat clicked");
    },
  });

  const DrawerList = (
    <Box sx={drawerStyle} onClick={toggleDrawer(false)}>
      <List>
        {options.map((option) => (
          <ListItem key={option.text} disablePadding>
            <ListItemButton onClick={option.action}>
              <ListItemText primary={option.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
    </Box>
  );

  return (
    <div style={drawerStyle}>
      <Button onClick={toggleDrawer(true)} variant="filled">
        <MenuTwoToneIcon sx={burgerSize.xl} />
      </Button>
      <Drawer open={open} onClose={toggleDrawer(false)} slotProps={drawerTheme}>
        {DrawerList}
      </Drawer>
    </div>
  );
};
