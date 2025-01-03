import { zodResolver } from "@hookform/resolvers/zod";
import { FieldValues, useForm, UseFormProps } from "react-hook-form";
import { z } from "zod";

type UseBaseFormParams<T extends FieldValues> = UseFormProps<T> & {
  validationSchema?: z.Schema;
};

export const useBaseForm = <T extends FieldValues>(
  props: UseBaseFormParams<T>
) => {
  const { validationSchema, ...restProps } = props;

  const formParams = useForm({
    ...restProps,
    resolver: validationSchema && zodResolver(validationSchema),
  });

  return formParams;
};
