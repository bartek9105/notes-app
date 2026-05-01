import { Route, Routes } from "react-router";
import { ROUTES } from "@/consts";
import {
  ForgotPassword,
  Notes,
  ResetPassword,
  SignIn,
  SignUp,
  ArchivedNotes,
  Settings,
  SettingsIndexRedirect,
  ColorTheme,
  ChangePassword,
} from "@/pages";
import { AuthGuard, AuthPagesGuard } from "@/guards";
import { MainLayout } from "@/layouts";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<AuthPagesGuard />}>
        <Route path={ROUTES.signUp()} element={<SignUp />} />
        <Route path={ROUTES.signIn()} element={<SignIn />} />
        <Route path={ROUTES.forgotPassword()} element={<ForgotPassword />} />
        <Route path={ROUTES.resetPassword()} element={<ResetPassword />} />
      </Route>

      <Route element={<AuthGuard />}>
        <Route path={ROUTES.notes.allNotes.root()} element={<MainLayout />}>
          <Route index element={<Notes />} />
          <Route
            path={ROUTES.notes.allNotes.details(":id")}
            element={<Notes />}
          />
        </Route>

        <Route path={ROUTES.notes.archived.root()} element={<MainLayout />}>
          <Route index element={<ArchivedNotes />} />
          <Route
            path={ROUTES.notes.archived.details(":id")}
            element={<ArchivedNotes />}
          />
        </Route>

        <Route path={ROUTES.settings.root()} element={<MainLayout />}>
          <Route element={<Settings />}>
            <Route index element={<SettingsIndexRedirect />} />
            <Route
              path={ROUTES.settings.colorTheme()}
              element={<ColorTheme />}
            />
            <Route path={ROUTES.settings.fontTheme()} element={null} />
            <Route
              path={ROUTES.settings.changePassword()}
              element={<ChangePassword />}
            />
            <Route path={ROUTES.settings.logout()} element={null} />
          </Route>
        </Route>
      </Route>
    </Routes>
  );
};
