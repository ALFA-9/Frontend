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
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  setActiveEmployee,
  setErrorMessageActiveEmployee,
  setIsFailedActiveEmployee,
  setIsRequestActiveEmployee,
  setIsSuccessActiveEmployee,
} from "../../redux/slices/head-employees-employee-slice";
import { getUserById } from "../../api/api";
import LoaderCircle from "../../components/loader/loader";
import ErrorPage from "../not-found/error";

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
  const dispatch = useAppDispatch();

  const { user, isRequest, isFailed, isSuccess, errorMessage } = useAppSelector(
    (state) => state.activeEmployee
  );

  async function receivingActiveEmployee() {
    dispatch(setIsRequestActiveEmployee(true));
    try {
      const employee = await getUserById(+params.user_id);
      dispatch(setActiveEmployee({ user: employee.data }));
      dispatch(setIsSuccessActiveEmployee(true));
    } catch (error) {
      dispatch(setIsFailedActiveEmployee(true));
      dispatch(
        setErrorMessageActiveEmployee(`Ошибка ${error.toJSON().status}`)
      );
    } finally {
      dispatch(setIsRequestActiveEmployee(false));
    }
  }

  useEffect(() => {
    if (user.id !== +params.user_id) {
      receivingActiveEmployee();
    }
  }, [user, params]);

  const { values, setValues, handleChange } = useForm({
    fullName: "",
    department: "",
    position: "",
    idpTitle: "",
    textaria: "",
  });

  const [isDone, setIsDone] = useState(false);
  const [taskCount, setTaskCount] = useState(1);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsDone(true);
  };

  return (
    <div className={styles.container}>
      <ButtonBack path={routes.headStaff + "/" + params.user_id} />
      {isRequest && <LoaderCircle />}
      {isFailed && <ErrorPage text={errorMessage} />}
      {isSuccess && isDone && (
        <>
          <h1 className={styles.title}>ИПР успешно назначен</h1>
          <p className={styles.message}>
            Индивидуальный план развития отобразится у сотрудника во вкладке
            ИПР.
          </p>
          <ButtonAccent
            title="Вернуться на страницу сотрудника"
            type="button"
            path={routes.headStaff + "/" + params.user_id}
            extraClass={styles.returnButton}
          />
        </>
      )}
      {isSuccess && !isDone && (
        <>
          <h1 className={styles.title}>Назначить ИПР</h1>
          <form onSubmit={handleSubmit} className={styles.form}>
            <fieldset className={styles.info}>
              <InputTypeText
                name={"fullName"}
                value={[user.last_name, user.first_name, user.patronymic].join(
                  " "
                )}
                onChange={handleChange}
                label="ФИО"
                placeholder="ФИО"
                disabled
              />
              <div className={styles.row}>
                <InputTypeText
                  name={"department"}
                  value={user.department}
                  onChange={handleChange}
                  label="Департамент"
                  placeholder="Департамент"
                  outerClass={styles.halfrow}
                  disabled
                />
                <InputTypeText
                  name={"position"}
                  value={user.post}
                  onChange={handleChange}
                  label="Должность"
                  placeholder="Должность"
                  outerClass={styles.halfrow}
                  disabled
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
                  index={index}
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
