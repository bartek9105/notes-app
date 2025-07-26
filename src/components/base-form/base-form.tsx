import { PropsWithChildren } from "react";
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  UseFormReturn,
} from "react-hook-form";
import cn from "classnames";
import styles from "./base-form.module.scss";

interface BaseFormProps<T extends FieldValues> {
  className?: string;
  params: UseFormReturn<T>;
  onSubmit: SubmitHandler<T>;
  id?: string;
}

export const BaseForm = <T extends FieldValues>({
  children,
  params,
  className,
  onSubmit,
  id,
}: PropsWithChildren<BaseFormProps<T>>) => {
  return (
    <FormProvider {...params}>
      <form
        className={cn(styles.container, className)}
        onSubmit={params.handleSubmit(onSubmit)}
        id={id}
      >
        {children}
      </form>
    </FormProvider>
  );
};
