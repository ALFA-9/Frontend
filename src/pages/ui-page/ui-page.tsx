import React, { useState } from "react";
import styles from "./ui-page.module.scss";
import InputTypeText from "../../ui/inputs/input-type-text/input-type-text";
import InputTypeCheckbox from "../../ui/inputs/input-type-checkbox/input-type-checkbox";
import InputTypeSwitcher from "../../ui/inputs/input-type-switcher/input-type-switcher";
import InputTypeSelect from "../../ui/inputs/input-type-select/input-type-select";
import { InputTypeTextaria } from "../../ui/inputs/input-type-textaria/input-type-textaria";
import InputTypeRadiobutton from "../../ui/inputs/input-type-radiobutton/input-type-radiobutton";

import PieChart from "../../ui/pie-chart/pie-chart";
import { testData } from "../../ui/pie-chart/test-data";

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
    supervisor1: "",
    supervisor2: "",
    textaria: "",
    daterange: "",
  });

  const handleOnChange = (
    e:
      | React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
      | React.FormEvent<HTMLParagraphElement | HTMLFieldSetElement>
  ) => {
    const { id, name, value, type, checked, textContent, role }: any = e.target;

    if (type === "radio") {
      setInputData({
        ...inputData,
        [name]: value,
      });
    } else {
      setInputData({
        ...inputData,
        [id || name]:
          type === "checkbox"
            ? checked
            : role === "textaria"
            ? textContent
            : value,
      });
    }
  };

  return (
    <div className={styles.page}>
      <h1>Страница для тестирования UI компонентов</h1>

      <PieChart
        data={testData}
        diameter={240}
        thickness={60}
        angleOffset={-90}
        sectorOffset={14}
        minVisiblePercentage={1}
      />
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

        {/* TODO  обработать для <select> атрибуты disabled, multiple, required */}
        <InputTypeSelect
          onChange={handleOnChange}
          name="supervisor1"
          id="supervisor1"
          label="Руководитель"
          value={inputData.supervisor1}
          defaultValue={""}
          size={5}
        >
          <option>Александров Александр Александрович</option>
          <option>Борисов Борис Борисович</option>
          <option>Васильев Василий Васильевич</option>
          <option disabled>Георгиев Георгий Георгиевич</option>
          <option>Денисов Денис Денисович</option>
          <option>Егоров Егор Егорович</option>
        </InputTypeSelect>

        <InputTypeSelect
          onChange={handleOnChange}
          name="supervisor2"
          id="supervisor2"
          label="Руководитель2"
          value={inputData.supervisor2}
          defaultValue={""}
          size={5}
        >
          <option>Александров Александр Александрович</option>
          <option>Борисов Борис Борисович</option>
          <option>Васильев Василий Васильевич</option>
          <option disabled>Георгиев Георгий Георгиевич</option>
          <option>Денисов Денис Денисович</option>
          <option>Егоров Егор Егорович</option>
        </InputTypeSelect>

        <InputTypeTextaria
          value={inputData.textaria}
          maxlength={500}
          id="textaria"
          placeholder="Введите текст письма"
          onInput={handleOnChange}
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
        <fieldset className={styles.fieldset} onChange={handleOnChange}>
          <InputTypeRadiobutton
            name="daterange"
            value="3"
            id="rad1"
            label="3 месяца"
          />
          <InputTypeRadiobutton
            name="daterange"
            value="6"
            id="rad2"
            label="6 месяцев"
          />
          <InputTypeRadiobutton
            name="daterange"
            value="12"
            id="rad3"
            label="1 год"
          />
          <InputTypeRadiobutton
            name="daterange"
            value="other"
            id="rad4"
            label="Другое"
          />
        </fieldset>

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
