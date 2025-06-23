import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { StoreProvider } from "./app/store";
import { RouterProvider } from "react-router";
import { router } from "./app/router/index.tsx";
import { ThemeProvider } from "./app/theme/ThemeContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <StoreProvider>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </StoreProvider>
  </StrictMode>
);
