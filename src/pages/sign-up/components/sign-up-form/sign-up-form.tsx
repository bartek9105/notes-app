import { SIGN_UP_FORM_DEFAULT_VALUES } from "./sign-up-form.const";
import { signUpFormValidationSchema } from "./sign-up-form.validations";
import styles from "./sign-up-form.module.scss";
import { SignUpFormDataType } from "./sign-up-form.types";
import { BaseForm, Button, Field, useBaseForm } from "@/components";

interface SignUpFormProps {
  onSubmit: (data: SignUpFormDataType) => void;
  isPending: boolean;
}

export const SignUpForm = ({ onSubmit, isPending }: SignUpFormProps) => {
  const formParams = useBaseForm({
    defaultValues: SIGN_UP_FORM_DEFAULT_VALUES,
    validationSchema: signUpFormValidationSchema,
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
        Sign up
      </Button>
    </BaseForm>
  );
};
