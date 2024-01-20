import React, { useState } from "react";
import styles from "./ui-page.module.scss";
import InputTypeText from "../../ui/inputs/input-type-text/input-type-text";
import InputTypeCheckbox from "../../ui/inputs/input-type-checkbox/input-type-checkbox";
import InputTypeSwitcher from "../../ui/inputs/input-type-switcher/input-type-switcher";
import InputTypeSelect from "../../ui/inputs/input-type-select/input-type-select";

export const UiPage = () => {
  const [inputData, setInputData] = useState({
    fullName: "",
    department: "",
    jobTitle: "",
    check1: false,
    check2: true,
    check3: false,
    check4: true,
    switch1: false,
    switch2: true,
    switch3: false,
    switch4: true,
    speciality: "",
    datetime: "",
  });

  const handleOnChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const {
      name,
      value,
      type,
      checked,
    }: { name: string; value: string; type: string; checked?: boolean } =
      e.target;

    setInputData({
      ...inputData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  return (
    <div className={styles.page}>
      <h1>Страница для тестирования UI компонентов</h1>
      <hr />
      <p>-- {JSON.stringify(inputData)} --</p>

      <form className={styles.container}>
        <InputTypeText
          onChange={handleOnChange}
          value={inputData.fullName}
          id="fullName"
          name="fullName"
          placeholder="ФИО"
          label="ФИО"
        />
        <InputTypeText
          onChange={handleOnChange}
          value={inputData.department}
          name="department"
          id="department"
          placeholder="Департамент"
          label="Департамент"
          required
        />
        <InputTypeText
          onChange={handleOnChange}
          value={inputData.jobTitle}
          id="jobTitle"
          name="jobTitle"
          placeholder="Должность"
          label="Должность"
        />
        <hr />
        <InputTypeCheckbox
          onChange={handleOnChange}
          checked={inputData.check1}
          name="check1"
          label="Первый"
        />
        <InputTypeCheckbox
          onChange={handleOnChange}
          checked={inputData.check2}
          name="check2"
          label="Второй"
        />
        <InputTypeCheckbox
          onChange={handleOnChange}
          checked={inputData.check3}
          name="check3"
          label="Третий"
          disabled
        />
        <InputTypeCheckbox
          onChange={handleOnChange}
          checked={inputData.check4}
          name="check4"
          label="Четвертый"
          disabled
        />
        <hr />
        <InputTypeSwitcher
          onChange={handleOnChange}
          checked={inputData.switch1}
          name="switch1"
          label="Первый"
        />
        <InputTypeSwitcher
          onChange={handleOnChange}
          checked={inputData.switch2}
          name="switch2"
          label="Второй"
          defaultChecked={Boolean(true)}
        />
        <InputTypeSwitcher
          onChange={handleOnChange}
          checked={inputData.switch3}
          name="switch3"
          label="Третий"
          disabled
        />
        <InputTypeSwitcher
          onChange={handleOnChange}
          checked={inputData.switch4}
          name="switch4"
          label="Четвертый"
          disabled
        />
        <hr />
        {/* TODO  обработать для <select> атрибуты disabled, multiple, required */}
        <InputTypeSelect
          onChange={handleOnChange}
          name="speciality"
          label="Специальность"
          value={inputData.speciality}
        >
          <option>--не выбрана--</option>
          <option>Оториноларинголог</option>
          <option>Терапевт</option>
          <option>Хирург</option>
          <option>Офтальмолог</option>
        </InputTypeSelect>
        <hr />
        {/* <InputTypeDate
          onChange={handleOnChange}
          placeholder="Когда ваш день рождения?"
          name="datetime"
          value={inputData.datetime}
        /> */}
      </form>
    </div>
  );
};
