import styles from "./input-type-textaria.module.scss";

export const InputTypeTextaria = () => {
  return (
    // <textarea onInput={(e)=>{
    //   console.log(e)
    //   e.nativeEvent.srcElement.style.height = "";
    //   e.target.style.height = e.target.scrollHeight + "px";
    // }}>
    // </textarea>
    // @ts-ignore
    <p onInput={e => console.log(e.target.innerText)}><span  className={styles.textarea} role="input" contentEditable></span></p>
  );
};
