import { useRef } from "react";
import { AnimatePresence, motion } from "motion/react";
import cn from "classnames";
import { useClickOutside, useToggle } from "@/hooks";
import { ChevronDownIcon } from "@/assets";
import { APPEAR_ANIMATION } from "@/consts";
import styles from "./dropdown.module.scss";
import { DropdownProps } from "./dropdown.types";

export const Dropdown = <T extends string = string>({
  options,
  value,
  onChange,
  label,
  placeholder,
  className,
  menuClassName,
  align = "left",
  disabled,
}: DropdownProps<T>) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { isOpen, toggle } = useToggle(false);

  useClickOutside(containerRef, () => isOpen && toggle(), isOpen);

  const selectedOption = options.find((option) => option.value === value);

  const handleSelect = (nextValue: T) => {
    onChange(nextValue);
    toggle();
  };

  return (
    <div ref={containerRef} className={cn(styles.container, className)}>
      <button
        type="button"
        className={styles.trigger}
        onClick={toggle}
        disabled={disabled}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <span
          className={cn(styles.triggerValue, {
            [styles.placeholder]: !selectedOption,
          })}
        >
          {label}
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        <ChevronDownIcon
          className={cn(styles.chevron, { [styles.chevronOpen]: isOpen })}
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            role="listbox"
            className={cn(
              styles.menu,
              align === "right" ? styles.menuAlignRight : styles.menuAlignLeft,
              menuClassName,
            )}
            {...APPEAR_ANIMATION}
          >
            {options.map((option) => {
              const isSelected = option.value === value;

              return (
                <li key={option.value} role="option" aria-selected={isSelected}>
                  <button
                    type="button"
                    className={cn(styles.option, {
                      [styles.optionSelected]: isSelected,
                    })}
                    onClick={() => handleSelect(option.value)}
                  >
                    <span>{option.label}</span>
                  </button>
                </li>
              );
            })}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};
