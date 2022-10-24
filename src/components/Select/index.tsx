import clsx from "clsx";
import { FC, useRef, useState } from "react";
import { useClickOutside } from "../../hooks/useClickOutside";
import { SelectProps } from "./interfaces";
import classes from "./style.module.scss";

export const Select: FC<SelectProps> = ({
  items,
  value,
  onChange,
  placeholder = "Select",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  const handleSelect = (value?: string) => {
    onChange(value);
    setIsOpen(false);
  };

  useClickOutside(ref, () => setIsOpen(false));

  return (
    <div
      className={clsx(classes.select, { [classes.selectActive]: isOpen })}
      ref={ref}
    >
      <div className={classes.selectCurrent} onClick={() => setIsOpen((current => !current))}>
        {value ? value : placeholder}
      </div>

      <ul className={classes.selectDropdown}>
        {value && (
          <li
            onClick={() => handleSelect()}
            className={classes.selectDropdownItem}
          >
            {placeholder}
          </li>
        )}

        {items.filter(item => value !== item).map((item) => (
          <li
            key={item}
            onClick={() => handleSelect(item)}
            className={classes.selectDropdownItem}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};
