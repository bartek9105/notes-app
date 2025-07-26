type FormValue = Record<string, unknown>;

export interface SanitizeFormResetParams {
  defaultValues: FormValue;
  resetValues: FormValue;
}
