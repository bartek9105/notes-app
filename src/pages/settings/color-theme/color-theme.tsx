import { Typography } from "@/components";
import styles from "./color-theme.module.scss";
import { Theme } from "providers/theme-provider/theme.types";
import { MoonIcon, SunIcon } from "@/assets";
import { useTheme } from "@/providers";
import cn from "classnames";
import { SettingOptionLayout } from "../settings-item-layout";
import { useTranslation } from "react-i18next";

const THEMES = [
  {
    id: "light",
    labelKey: "settings.color-theme.themes.light.label",
    descriptionKey: "settings.color-theme.themes.light.description",
    icon: SunIcon,
  },
  {
    id: "dark",
    labelKey: "settings.color-theme.themes.dark.label",
    descriptionKey: "settings.color-theme.themes.dark.description",
    icon: MoonIcon,
  },
];

export const ColorTheme = () => {
  const { t } = useTranslation();
  const { theme: currentTheme, handleSetTheme } = useTheme();

  return (
    <SettingOptionLayout
      title={t("settings.color-theme.title")}
      hint={t("settings.color-theme.hint")}
    >
      <fieldset className={styles.themes}>
        {THEMES.map(({ id, labelKey, descriptionKey, icon: ThemeIcon }) => (
          <label
            key={id}
            className={cn(styles.theme, {
              [styles.themeActive]: id === currentTheme,
            })}
          >
            <ThemeIcon className={styles.themeIcon} />
            <div className={styles.themeBody}>
              <Typography variant="text-4" className={styles.themeTitle}>
                {t(labelKey)}
              </Typography>
              <Typography variant="text-6" className={styles.themeHint}>
                {t(descriptionKey)}
              </Typography>
            </div>
            <input
              className={styles.radio}
              type="radio"
              name="theme"
              value={id}
              checked={id === currentTheme}
              onChange={() => handleSetTheme(id as Theme)}
            />
          </label>
        ))}
      </fieldset>
    </SettingOptionLayout>
  );
};
