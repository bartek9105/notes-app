import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import "./index.css";
import App from "./App.tsx";
import { SignUp } from "./pages/sign-up/sign-up.tsx";
import { QueryProvider, SessionProvider } from "@/providers";
import { AuthGuard, AuthPagesGuard } from "./guards";
import { ROUTES } from "@/consts";
import { SignIn } from "./pages/sign-in/sign-in.tsx";
import { ForgotPassword } from "./pages/forgot-password/forgot-password.tsx";
import { ResetPassword } from "./pages/reset-password/reset-password.tsx";
import { MainLayout } from "./layouts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <QueryProvider>
        <SessionProvider>
          <Routes>
            <Route element={<AuthPagesGuard />}>
              <Route path={ROUTES.signUp()} element={<SignUp />} />
            </Route>
            <Route element={<AuthPagesGuard />}>
              <Route path={ROUTES.signIn()} element={<SignIn />} />
            </Route>
            {/* <Route element={<AuthPagesGuard />}> */}
            <Route
              path={ROUTES.forgotPassword()}
              element={<ForgotPassword />}
            />
            <Route path={ROUTES.resetPassword()} element={<ResetPassword />} />
            {/* </Route> */}
            <Route path="/" element={<MainLayout />}>
              <Route element={<AuthGuard />}>
                <Route path={ROUTES.notes.root()} element={<App />} />
                <Route path={ROUTES.notes.details(":id")} element={<App />} />
              </Route>
            </Route>
          </Routes>
        </SessionProvider>
      </QueryProvider>
    </BrowserRouter>
  </StrictMode>
);
