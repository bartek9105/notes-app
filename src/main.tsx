import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import "./index.css";
import { QueryProvider, SessionProvider } from "@/providers";
import { AppRoutes } from "@/config";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <QueryProvider>
        <SessionProvider>
          <AppRoutes />
        </SessionProvider>
      </QueryProvider>
    </BrowserRouter>
  </StrictMode>
);
