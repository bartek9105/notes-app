import { Route, Routes } from "react-router";
import { ROUTES } from "@/consts";
import { ForgotPassword, Notes, ResetPassword, SignIn, SignUp } from "@/pages";
import { AuthGuard, AuthPagesGuard } from "@/guards";
import { MainLayout } from "@/layouts";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<AuthPagesGuard />}>
        <Route path={ROUTES.signUp()} element={<SignUp />} />
      </Route>
      <Route element={<AuthPagesGuard />}>
        <Route path={ROUTES.signIn()} element={<SignIn />} />
      </Route>
      {/* <Route element={<AuthPagesGuard />}> */}
      <Route path={ROUTES.forgotPassword()} element={<ForgotPassword />} />
      <Route path={ROUTES.resetPassword()} element={<ResetPassword />} />
      {/* </Route> */}
      <Route path={ROUTES.notes.root()} element={<MainLayout />}>
        <Route element={<AuthGuard />}>
          <Route path={ROUTES.notes.root()} element={<Notes />} />
          <Route path={ROUTES.notes.details(":id")} element={<Notes />} />
        </Route>
      </Route>
    </Routes>
  );
};
