import { useChangePasswordMutation, useGetMeQuery } from "@/api";
import styles from "./change-password.module.scss";
import {
  BaseForm,
  Button,
  Field,
  Spinner,
  Typography,
  useBaseForm,
} from "@/components";
import { useTranslation } from "react-i18next";
import { CHANGE_PASSWORD_DEFAULT_VALUES } from "./change-password.const";
import { useChangePasswordValidationSchema } from "./change-password.validations";
import { toast } from "sonner";
import { SettingOptionLayout } from "../settings-item-layout";
import { ChangePasswordFormDataType } from "./change-password.types";

export const ChangePassword = () => {
  const { t } = useTranslation();

  const { data: me, isLoading: isMeLoading } = useGetMeQuery();

  const validationSchema = useChangePasswordValidationSchema();

  const formParams = useBaseForm({
    defaultValues: CHANGE_PASSWORD_DEFAULT_VALUES,
    validationSchema,
  });

  const authProvider = me?.app_metadata.provider;

  const {
    mutateAsync: changePasswordMutation,
    isPending: isChangePasswordPending,
  } = useChangePasswordMutation();

  const onSubmit = async ({ password }: ChangePasswordFormDataType) => {
    try {
      await changePasswordMutation({ password });
      toast.success(t("settings.change-password.toasts.success"));
    } catch {
      toast.error(t("settings.change-password.toasts.error"));
    }
  };

  const content = () => {
    if (isMeLoading) {
      return <Spinner />;
    }

    if (authProvider === "google") {
      return (
        <Typography variant="text-3">
          {t("settings.change-password.hint")}
        </Typography>
      );
    }

    return (
      <BaseForm params={formParams} onSubmit={onSubmit} className={styles.form}>
        <Field
          name="password"
          label={t("settings.change-password.form.password.label")}
          type="password"
        />
        <Field
          name="confirmPassword"
          label={t("settings.change-password.form.confirm-password.label")}
          type="password"
        />
        <div className={styles.submitButtonContainer}>
          <Button
            className={styles.submitButton}
            type="submit"
            isLoading={isChangePasswordPending}
            disabled={isChangePasswordPending}
          >
            {t("settings.change-password.form.submit")}
          </Button>
        </div>
      </BaseForm>
    );
  };

  return (
    <SettingOptionLayout title={t("settings.change-password.title")}>
      {content()}
    </SettingOptionLayout>
  );
};
