import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import "./index.css";
import App from "./App.tsx";
import { SignUp } from "./pages/sign-up/sign-up.tsx";
import { QueryProvider, SessionProvider } from "@/providers";
import { AuthGuard, AuthPagesGuard } from "./guards";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <QueryProvider>
        <SessionProvider>
          <Routes>
            <Route element={<AuthPagesGuard />}>
              <Route path="/sign-up" element={<SignUp />} />
            </Route>
            <Route element={<AuthGuard />}>
              <Route path="/" element={<App />} />
            </Route>
          </Routes>
        </SessionProvider>
      </QueryProvider>
    </BrowserRouter>
  </StrictMode>
);
