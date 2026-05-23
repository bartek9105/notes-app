import {
  BaseForm,
  Button,
  InputField,
  PasswordField,
  useBaseForm,
} from "@/components";
import { AUTH_FORM_DEFAULT_VALUES } from "./auth-form.const";
import { authFormValidationSchema } from "./auth-form.validations";
import { AuthFormDataType } from "./auth-form.types";
import styles from "./auth-form.module.scss";
import { useTranslation } from "react-i18next";

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
  const { t } = useTranslation();

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
      <InputField
        name="email"
        label={t("auth.form.email.label")}
        placeholder="email@example.com"
      />
      <PasswordField
        name="password"
        label={t("auth.form.password.label")}
        hint={t("auth.form.password.hint")}
      />
      <Button type="submit" isLoading={isPending}>
        {buttonLabel}
      </Button>
    </BaseForm>
  );
};
