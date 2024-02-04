import styles from "./form-task.module.scss";
import { FC, MouseEventHandler, useEffect } from "react";
import InputTypeText from "../../ui/inputs/input-type-text/input-type-text";
import InputTypeSelect from "../../ui/inputs/input-type-select/input-type-select";
import InputTypeTextaria from "../../ui/inputs/input-type-textaria/input-type-textaria";
import InputTypeRadiobutton from "../../ui/inputs/input-type-radiobutton/input-type-radiobutton";
import InputTypeDate from "../../ui/inputs/input-type-date/input-type-date";
import DeleteButton from "../../ui/buttons/delete-button/delete-button";
import { TTaskDTO } from "../../pages/head-form/head-form.types";

interface IFormTaskProps extends TTaskDTO {
  hasDelete?: boolean;
  index: number;
  removTask: (uuid: string) => void;
  onChange: (
    e:
      | React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
      | React.FormEvent<HTMLParagraphElement | HTMLFieldSetElement>,
    uuid: string,
    payload?: any
  ) => void;
}

const FormTask: FC<IFormTaskProps> = ({
  uuid,
  title,
  type,
  method,
  description,
  period,
  startDate,
  endDate,
  hasDelete = false,
  index,
  removTask,
  onChange,
}) => {
  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
      | React.FormEvent<HTMLParagraphElement | HTMLFieldSetElement>,
    payload?: any
  ) => {
    onChange(e, uuid, payload);
  };

  const handleClick: MouseEventHandler<HTMLButtonElement> = (event) => {
    console.log("delete");
  };

  return (
    <li>
      <form id={"" + index} name={"" + index} className={styles.task}>
        <div className={styles.headline}>
          <p className={styles.title}>{`Задача ${index + 1}`}</p>
          {hasDelete && (
            <DeleteButton
              type="button"
              onClick={() => {
                removTask(uuid);
              }}
            />
          )}
        </div>
        <InputTypeText
          name={"title"}
          id={"title"}
          value={title}
          onChange={handleChange}
          label="Название"
          placeholder="Название"
        />
        <div className={styles.row}>
          <InputTypeSelect
            name={"type"}
            id={"type"}
            value={type}
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
            name={"method"}
            id={"method"}
            value={method}
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
            id={"description"}
            value={description}
            onInput={handleChange}
            label="Описание"
            placeholder="Введите текст"
            maxlength={500}
          />
        </div>
        <div className={styles.deadline}>
          <p className={styles.legend}>Срок выполнения</p>

          <fieldset onChange={handleChange} className={styles.radio}>
            <InputTypeRadiobutton
              name="period"
              value="3"
              id={"rad1" + index}
              label="3 месяца"
            />
            <InputTypeRadiobutton
              name="period"
              value="6"
              id={"rad2" + index}
              label="6 месяцев"
            />
            <InputTypeRadiobutton
              name="period"
              value="12"
              id={"rad3" + index}
              label="1 год"
            />
            <InputTypeRadiobutton
              name="period"
              value="other"
              id={"rad4" + index}
              label="Другое"
              defaultChecked
            />
          </fieldset>
          <div className={styles.date}>
            <div className={styles.daterange}>
              <InputTypeDate
                value={startDate}
                onChange={handleChange}
                placeholder="Выберете дату"
                id="startDate"
                name="startDate"
              />
            </div>
            <div className={styles.daterange}>
              <InputTypeDate
                value={endDate}
                onChange={handleChange}
                placeholder="Выберете дату"
                id="endDate"
                name="endDate"
              />
            </div>
          </div>
        </div>
      </form>
    </li>
  );
};

export default FormTask;
