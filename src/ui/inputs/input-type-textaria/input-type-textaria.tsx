import { FC, useEffect, useRef, useState } from "react";
import styles from "./input-type-textaria.module.scss";

interface IInputTypeTextaria
  extends React.HTMLAttributes<HTMLParagraphElement> {
  placeholder?: string;
  extraClass?: string;
  label?: string;
  name: string;
  value: string;
  maxlength?: number;
}

const InputTypeTextaria: FC<IInputTypeTextaria> = ({
  value,
  maxlength = Infinity,
  ...HTMLAttributes
}) => {
  const myRef = useRef(null);
  const [isExcess, setIsExcess] = useState(false);

  useEffect(() => {
    const curExcess = value.length > maxlength;
    if (isExcess !== curExcess) {
      setIsExcess(curExcess);
    }
  }, [value]);

  useEffect(() => {
    myRef.current.textContent = value;
  }, []);

  return (
    <label
      htmlFor={HTMLAttributes.id}
      className={`${styles.container} ${
        maxlength === Infinity && styles.container_noLimit
      } ${isExcess && styles.container_error}`}
    >
      <p
        {...HTMLAttributes}
        className={styles.textarea}
        role="textaria"
        ref={myRef}
        contentEditable
      ></p>
      {maxlength !== Infinity && (
        <div className={styles.counter}>{`${isExcess ? "Много букв " : ""}${
          value.length
        }/${maxlength}`}</div>
      )}
    </label>
  );
};

export default InputTypeTextaria;
