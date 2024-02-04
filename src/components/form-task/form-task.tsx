import styles from "./form-task.module.scss";
import { FC, MouseEventHandler, useEffect } from "react";
import InputTypeText from "../../ui/inputs/input-type-text/input-type-text";
import InputTypeSelect from "../../ui/inputs/input-type-select/input-type-select";
import InputTypeTextaria from "../../ui/inputs/input-type-textaria/input-type-textaria";
import InputTypeRadiobutton from "../../ui/inputs/input-type-radiobutton/input-type-radiobutton";
import InputTypeDate from "../../ui/inputs/input-type-date/input-type-date";
import DeleteButton from "../../ui/buttons/delete-button/delete-button";
import { useForm } from "../../hooks/use-form";

interface IFormTaskProps {
  title: string;
  hasDelete?: boolean;
  index: number;
}

const FormTask: FC<IFormTaskProps> = ({ title, hasDelete = false, index }) => {
  const { values, setValues, handleChange } = useForm({
    name: "",
    type: "",
    control: "",
    description: "",
    dateStart: "",
    dateEnd: "",
  });

  const handleClick: MouseEventHandler<HTMLButtonElement> = (event) => {
    console.log("delete");
  };

  return (
    <li>
      <fieldset className={styles.task}>
        <div className={styles.headline}>
          <p className={styles.title}>{title}</p>
          {hasDelete && <DeleteButton type="button" onClick={handleClick} />}
        </div>
        <InputTypeText
          name={"name"}
          value={values.name}
          onChange={handleChange}
          label="Название"
          placeholder="Название"
        />
        <div className={styles.row}>
          <InputTypeSelect
            name={"type"}
            value={values.type}
            onChange={handleChange}
            label="Тип"
            outerClass={styles.halfrow}
          >
            {[
              "Самостоятельное обучение",
              "Проект",
              "Задание на рабочем месте",
            ].map((item, index) => (
              <option key={`type-option${index}`}>{item}</option>
            ))}
          </InputTypeSelect>
          <InputTypeSelect
            name={"control"}
            value={values.control}
            onChange={handleChange}
            label="Метод приемки"
            outerClass={styles.halfrow}
          >
            {["Собеседование", "Тест", "Другое"].map((item, index) => (
              <option key={`control-option${index}`}>{item}</option>
            ))}
          </InputTypeSelect>
        </div>
        <div className={styles.textaria}>
          <p className={styles.legend}>Описание</p>
          <InputTypeTextaria
            name={"description"}
            value=""
            onChange={handleChange}
            label="Описание"
            placeholder="Введите текст"
            maxlength={500}
          />
        </div>
        <fieldset className={styles.deadline}>
          <p className={styles.legend}>Срок выполнения</p>
          <div className={styles.radio}>
            <InputTypeRadiobutton
              name={"daterange" + index}
              value="3"
              id={"rad1" + index}
              label="3 месяца"
            />
            <InputTypeRadiobutton
              name={"daterange" + index}
              value="6"
              id={"rad2" + index}
              label="6 месяцев"
            />
            <InputTypeRadiobutton
              name={"daterange" + index}
              value="12"
              id={"rad3" + index}
              label="1 год"
            />
            <InputTypeRadiobutton
              name={"daterange" + index}
              value="other"
              id={"rad4" + index}
              label="Другое"
              defaultChecked
            />
          </div>
          <div className={styles.date}>
            <div className={styles.daterange}>
              <InputTypeDate
                value=""
                onChange={() => {}}
                placeholder="Выберете дату"
                id="date"
                name="date"
              />
            </div>
            <div className={styles.daterange}>
              <InputTypeDate
                value=""
                onChange={() => {}}
                placeholder="Выберете дату"
                id="date"
                name="date"
              />
            </div>
          </div>
        </fieldset>
      </fieldset>
    </li>
  );
};

export default FormTask;
