import { FC, useEffect, useRef } from "react";
import styles from "./input-type-textaria.module.scss";

interface IInputTypeTextaria
  extends React.HTMLAttributes<HTMLParagraphElement> {
  placeholder?: string;
  extraClass?: string;
  label?: string;
  value: string;
}

export const InputTypeTextaria: FC<IInputTypeTextaria> = ({
  value,
  ...HTMLAttributes
}) => {
  const myRef = useRef(null);

  useEffect(() => {
    myRef.current.textContent = value;
  }, []);

  return (
    <div className={styles.container}>
      <p
        {...HTMLAttributes}
        className={styles.textarea}
        role="textaria"
        ref={myRef}
        contentEditable
      ></p>
    </div>
  );
};
