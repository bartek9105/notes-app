import { BaseForm, Button, Field, useBaseForm } from "@/components";
import { AuthFormLayout } from "../auth-form-layout/auth-form-layout";
import { FORGOT_PASSWORD_FORM_DEFAULT_VALUES } from "./forgot-password-form.const";
import { forgotPasswordFormValidationSchema } from "./forgot-password-form.validations";
import styles from "./forgot-password-form.module.scss";
import { useForgotPasswordMutation } from "@/api";
import { ForgotPasswordDataType } from "./forgot-password.types";
import { useTranslation } from "react-i18next";

export const ForgotPasswordForm = () => {
  const { t } = useTranslation();

  const formParams = useBaseForm({
    defaultValues: FORGOT_PASSWORD_FORM_DEFAULT_VALUES,
    validationSchema: forgotPasswordFormValidationSchema,
  });

  const { mutateAsync: forgotPasswordMutation, isPending } =
    useForgotPasswordMutation();

  const onSubmit = async (data: ForgotPasswordDataType) => {
    await forgotPasswordMutation(data);
  };

  return (
    <AuthFormLayout
      title={t("auth.forgot-password.title")}
      hint={t("auth.forgot-password.hint")}
    >
      <BaseForm
        params={formParams}
        onSubmit={onSubmit}
        className={styles.container}
      >
        <Field
          name="email"
          label={t("auth.forgot-password.form.email.label")}
          placeholder="email@example.com"
        />
        <Button type="submit" isLoading={isPending}>
          {t("auth.forgot-password.form.submit")}
        </Button>
      </BaseForm>
    </AuthFormLayout>
  );
};
