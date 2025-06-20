export const ROUTES = {
  notes: {
    root: () => "/",
    details: (id: string) => `/${id}`,
    archived: () => "/archived",
    tags: () => "/tags",
    search: () => "/search",
  },
  signUp: () => "/sign-up",
  signIn: () => "/sign-in",
  forgotPassword: () => "/forgot-password",
  resetPassword: () => "/reset-password",
  settings: () => "/settings",
};
