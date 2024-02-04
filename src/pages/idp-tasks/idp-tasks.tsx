import { useEffect, FC } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { fetchIdpDataById } from '../../redux/slices/idp-tasks-slice';
import ButtonBack from '../../ui/buttons/button-back/button-back';
import IdpTask from '../../components/idp-task/idp-task';
import { routes } from '../../utils/const-routes';
import styles from './idp-tasks.module.scss';
import LoaderCircle from '../../components/loader/loader';
import ErrorPage from '../not-found/error';

const IdpTasks: FC = () => {
  const { title, tasks, isRequest, isSuccess, isFailed, errorMessage } = useAppSelector(
    (state) => state.idpTasks
  )

  const hasTasks = !!tasks.length;
  let isHead = false;

  const location = useLocation();
  const params = useParams();

  const pathUserId = params.user_id;

  const pathResolve = () => {
    if (location.pathname.includes(routes.employee)) {
      isHead = false;
      return routes.employeeIdp;
    }
    if (location.pathname.includes(routes.head)) {
      isHead = true;
      return routes.headStaff + '/' + pathUserId;
    }
  }

  const dispatch = useAppDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(fetchIdpDataById({idp: +params.idp}));
  }, []);

  return (
    <>
    <ButtonBack path={pathResolve()} />
    {isRequest && <LoaderCircle />}
    {isFailed && <ErrorPage text={errorMessage} />}
    {isSuccess && (
      <div className={styles.container}>
        <h1 className={styles.title}>{title}</h1>
        {hasTasks
          ? (
            <ul className={styles.tasks}>
              {tasks.map((task, index) =>
                <IdpTask data={task} isHead={isHead} key={`idp-task${index}`}/>
              )}
            </ul>
          )
          : (
            <p className={styles.message}>
              На данный момент у вас нет задач к этому ИПР. Обратитесь к вашему руководителю.
            </p>
          )
        }
      </div>
    )}
    </>
  )
}

export default IdpTasks;
