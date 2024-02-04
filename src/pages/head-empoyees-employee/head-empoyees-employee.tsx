import { FC, useEffect, useState } from "react";
import styles from "./head-empoyees-employee.module.scss";
import Tabs from "../../ui/tabs/tabs";
import TabPane from "../../ui/tabs/tab-pane/tab-pane";
import TextArea from "../../ui/text-area/text-area";
import CompetenciesTable from "../../components/competencies-table/competencies-table";
import IdpCard from "../../components/idp-card/idp-card";
import ButtonBack from "../../ui/buttons/button-back/button-back";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import ButtonAccent from "../../ui/buttons/button-accent/button-accent";
import { routes } from "../../utils/const-routes";
import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import { getUserById } from "../../api/api";
import {
  setActiveEmployee,
  setErrorMessageActiveEmployee,
  setIsFailedActiveEmployee,
  setIsRequestActiveEmployee,
  setIsSuccessActiveEmployee,
} from "../../redux/slices/head-employees-employee-slice";
import ErrorPage from "../not-found/error";
import LoaderCircle from "../../components/loader/loader";

const HeadEmpoyeesEmployee: FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const params = useParams();
  const dispatch = useAppDispatch();
  const { user, isRequest, isFailed, isSuccess, errorMessage } = useAppSelector(
    (state) => state.activeEmployee
  );
  const [isAddIdpButtonDisabled, setIsAddIdpButtonDisabled] =
    useState<boolean>(false);

  const handleNewIdpClick = () => {
    navigate(location.pathname + "/form");
  };

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

  useEffect(() => {
    user.idps.forEach((item) =>
      item.status_idp === "in_work" ? setIsAddIdpButtonDisabled(true) : setIsAddIdpButtonDisabled(false)
    );
  }, [user]);

  return (
    <>
      <ButtonBack path={routes.headStaff} />
      {isRequest && <LoaderCircle />}
      {isFailed && <ErrorPage text={errorMessage} />}
      {isSuccess && (
        <>
          <div className={`${styles.title_wrapper}`}>
            <img
              className={styles.title_img}
              src={user.image}
              alt={`${user.last_name} ${user.first_name} ${user?.patronymic}`}
            />
            <h1
              className={styles.title}
            >{`${user.last_name} ${user.first_name} ${user?.patronymic}`}</h1>
          </div>
          <Tabs extraContainerStyles={styles.extra_container_styles}>
            <TabPane title="Личная информация">
              <section
                aria-label="Личная информация"
                className={styles.tab_child}
              >
                <TextArea context={"Департамент"} content={user.department} />
                <div className={styles.extra_text_wrapper}>
                  <TextArea context={"Должность"} content={user.post} />
                  <TextArea context={"Грейд"} content={user.grade} />
                </div>
              </section>
              <section className={styles.competencies_container}>
                <h2 className={styles.competencies_title}>Компетенции</h2>
                <CompetenciesTable
                  title={"Soft Skills"}
                  scors={user.soft_skills}
                />
                <CompetenciesTable
                  title={"Hard Skills"}
                  scors={user.hard_skills}
                />
              </section>
            </TabPane>
            <TabPane title="Индивидуальный план развития">
              <ul className={styles.idp_list}>
                {user.idps.map((item) => (
                  <IdpCard data={item} key={item.title} isHead={true} />
                ))}
              </ul>
              <div className={styles.button_accent}>
                <ButtonAccent
                  title="Назначить новый ИПР"
                  disabled={isAddIdpButtonDisabled}
                  path={location.pathname + "/form"}
                />
              </div>
            </TabPane>
          </Tabs>
        </>
      )}
    </>
  );
};

export default HeadEmpoyeesEmployee;
