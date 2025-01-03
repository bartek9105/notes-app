import { PropsWithChildren } from "react";
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  UseFormReturn,
} from "react-hook-form";

interface BaseFormProps<T extends FieldValues> {
  className?: string;
  params: UseFormReturn<T>;
  onSubmit: SubmitHandler<T>;
}

export const BaseForm = <T extends FieldValues>({
  children,
  params,
  className,
  onSubmit,
}: PropsWithChildren<BaseFormProps<T>>) => {
  return (
    <FormProvider {...params}>
      <form className={className} onSubmit={params.handleSubmit(onSubmit)}>
        {children}
      </form>
    </FormProvider>
  );
};
