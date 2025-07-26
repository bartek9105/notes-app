import CreatableSelect from "react-select/creatable";
import { useController } from "react-hook-form";
import styles from "./select-field.module.scss";
import cn from "classnames";

type Option = {
  label: string;
  value: string;
};

type SelectFieldProps = {
  name: string;
  placeholder?: string;
  className?: string;
};

export const SelectField = ({
  name,
  placeholder,
  className,
  ...rest
}: SelectFieldProps) => {
  const { field } = useController({ name });

  const mappedValues = (field.value || []).map((value: string) => ({
    value,
    label: value,
  }));

  const handleOnChange = (values: readonly Option[]) => {
    field.onChange(values.map(({ value }) => value));
  };

  return (
    <CreatableSelect<Option, true>
      {...field}
      {...rest}
      isMulti
      value={mappedValues}
      onChange={handleOnChange}
      placeholder={placeholder}
      classNames={{
        multiValue: () => styles.multiValue,
        multiValueRemove: () => styles.multiValueRemove,
        control: () => styles.control,
        option: () => styles.option,
        container: () => cn(className, styles.container),
        valueContainer: () => styles.valueContainer,
        placeholder: () => styles.placeholder,
      }}
    />
  );
};
