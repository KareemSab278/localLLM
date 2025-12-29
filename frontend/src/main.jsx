import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";
import { MantineProvider } from "@mantine/core";
import { Theme } from "./Theme";
import { DrawerComponent } from "./components/drawerComponent";


createRoot(document.getElementById("root")).render(
  <MantineProvider>
    <DrawerComponent options={[]} />
    <style>{Theme}</style>
    <StrictMode>
      <App />
    </StrictMode>
  </MantineProvider>
);
