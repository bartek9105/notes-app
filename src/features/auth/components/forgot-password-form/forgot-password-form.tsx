import { BaseForm, Button, Field, useBaseForm } from "@/components";
import { AuthFormLayout } from "../auth-form-layout/auth-form-layout";
import { FORGOT_PASSWORD_FORM_DEFAULT_VALUES } from "./forgot-password-form.const";
import { forgotPasswordFormValidationSchema } from "./forgot-password-form.validations";
import styles from "./forgot-password-form.module.scss";
import { useForgotPasswordMutation } from "@/api";
import { ForgotPasswordDataType } from "./forgot-password.types";

export const ForgotPasswordForm = () => {
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
      title="Forgotten your password?"
      hint="Enter your email below, and we’ll send you a link to reset it."
    >
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
        <Button type="submit" isLoading={isPending}>
          Send Reset Link
        </Button>
      </BaseForm>
    </AuthFormLayout>
  );
};
