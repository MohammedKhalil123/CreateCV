import { ChangeEventHandler } from "react";
import styles from "./input_field.module.css";

interface emailProps {
  placeholder?: string;
  onBlur: ChangeEventHandler<HTMLInputElement>;
}

export default function CustomInputField({ placeholder, onBlur }: emailProps) {
  return (
    <input
      className={styles.inputField}
      placeholder={placeholder}
      onBlur={onBlur}
    />
  );
}
