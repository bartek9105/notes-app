import { BaseForm, Button, Field, useBaseForm } from "@/components";
import { AUTH_FORM_DEFAULT_VALUES } from "./auth-form.const";
import { authFormValidationSchema } from "./auth-form.validations";
import { AuthFormDataType } from "./auth-form.types";
import styles from "./auth-form.module.scss";

interface AuthFormProps {
  onSubmit: (data: AuthFormDataType) => void;
  isPending: boolean;
  buttonLabel: string;
}

export const AuthForm = ({
  onSubmit,
  isPending,
  buttonLabel,
}: AuthFormProps) => {
  const formParams = useBaseForm({
    defaultValues: AUTH_FORM_DEFAULT_VALUES,
    validationSchema: authFormValidationSchema,
  });

  return (
    <BaseForm
      params={formParams}
      onSubmit={onSubmit}
      className={styles.container}
    >
      <Field
        name="email"
        label="Email address"
        placeholder="email@example.com"
      />
      <Field
        name="password"
        label="Password"
        type="password"
        hint="At least 8 characters"
      />
      <Button type="submit" isLoading={isPending}>
        {buttonLabel}
      </Button>
    </BaseForm>
  );
};
