import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import "./index.css";
import "./config/i18n";
import { QueryProvider, SessionProvider } from "@/providers";
import { AppRoutes } from "@/config";
import { Toaster } from "sonner";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <QueryProvider>
        <SessionProvider>
          <AppRoutes />
          <Toaster richColors />
        </SessionProvider>
      </QueryProvider>
    </BrowserRouter>
  </StrictMode>
);
