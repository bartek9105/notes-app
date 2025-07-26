import { SanitizeFormResetParams } from "./base-form.types";

export const sanitizeFormReset = ({
  defaultValues,
  resetValues,
}: SanitizeFormResetParams) =>
  Object.fromEntries(
    Object.entries(defaultValues).map(([key, value]) => [
      key,
      resetValues?.[key] ?? value,
    ])
  );
