import styles from "./head-form.module.scss";
import { FC, FormEvent, useState, useEffect } from "react";
import InputTypeText from "../../ui/inputs/input-type-text/input-type-text";
import ButtonAccent from "../../ui/buttons/button-accent/button-accent";
import FormTask from "../../components/form-task/form-task";
import AddButton from "../../ui/buttons/add-button/add-button";
import { useForm } from "../../hooks/use-form";
import { routes } from "../../utils/const-routes";
import ButtonBack from "../../ui/buttons/button-back/button-back";
import { useParams } from "react-router-dom";

type TUser = {
  fullName: string;
  department: string;
  position: string;
};

const user: TUser = {
  fullName: "Габдрахманов Александр Александрович",
  department: "Отдел рекламы",
  position: "Backend-разработчик",
};

const HeadForm: FC = () => {
  const params = useParams();
  const { values, setValues, handleChange } = useForm({
    fullName: "",
    department: "",
    position: "",
    idpTitle: "",
    textaria: "",
  });

  const autofill = (user: TUser) => {
    if (user && user.fullName && user.department && user.position)
      setValues({
        fullName: user.fullName,
        department: user.department,
        position: user.position,
        idpTitle: "",
        textaria: "",
      });
  };

  useEffect(() => {
    console.log(params);
    if (user) autofill(user);
  }, []);

  const [isDone, setIsDone] = useState(false);
  const [taskCount, setTaskCount] = useState(1);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsDone(true);
  };

  return (
    <div className={styles.container}>
      <ButtonBack path={routes.headStaff + "/" + params.user_id} />
      {isDone && (
        <>
          <h1 className={styles.title}>ИПР успешно назначен</h1>
          <p className={styles.message}>
            Индивидуальный план развития отобразится у сотрудника во вкладке
            ИПР.
          </p>
          <ButtonAccent
            title="Вернуться на страницу сотрудника"
            type="button"
            path={routes.headStaffId}
            extraClass={styles.returnButton}
          />
        </>
      )}
      {!isDone && (
        <>
          <h1 className={styles.title}>Назначить ИПР</h1>
          <form onSubmit={handleSubmit} className={styles.form}>
            <fieldset className={styles.info}>
              <InputTypeText
                name={"fullName"}
                value={values.fullName}
                onChange={handleChange}
                label="ФИО"
                placeholder="ФИО"
              />
              <div className={styles.row}>
                <InputTypeText
                  name={"department"}
                  value={values.department}
                  onChange={handleChange}
                  label="Департамент"
                  placeholder="Департамент"
                  outerClass={styles.halfrow}
                />
                <InputTypeText
                  name={"position"}
                  value={values.position}
                  onChange={handleChange}
                  label="Должность"
                  placeholder="Должность"
                  outerClass={styles.halfrow}
                />
              </div>
              <InputTypeText
                name={"idpTitle"}
                value={values.idpTitle}
                onChange={handleChange}
                label="Название ИПР"
                placeholder="Название ИПР"
              />
            </fieldset>
            <ul className={styles.tasks}>
              {[...Array(taskCount)].map((item, index, arr) => (
                <FormTask
                  title={`Задача ${++index}`}
                  hasDelete={arr.length > 1}
                  key={`form-task${index}`}
                />
              ))}
            </ul>
            <AddButton
              title="Добавить еще одну задачу"
              type="button"
              onClick={() => {
                setTaskCount(taskCount + 1);
              }}
            />
            <ButtonAccent
              title="Назначить ИПР"
              type="submit"
              extraClass={styles.submitButton}
            />
          </form>
        </>
      )}
    </div>
  );
};

export default HeadForm;
