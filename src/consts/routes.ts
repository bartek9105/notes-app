export const ROUTES = {
  notes: {
    allNotes: {
      root: () => "/",
      details: (id: string) => `/${id}`,
    },
    archived: {
      root: () => "/archived",
      details: (id: string) => `/archived/${id}`,
    },
    tags: () => "/tags",
    search: () => "/search",
  },
  signUp: () => "/sign-up",
  signIn: () => "/sign-in",
  forgotPassword: () => "/forgot-password",
  resetPassword: () => "/reset-password",
  settings: () => "/settings",
};
