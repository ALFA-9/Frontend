import { useLocation, useParams } from 'react-router-dom';
import ButtonBack from '../../ui/buttons/button-back/button-back';
import IdpTask from '../../components/idp-task/idp-task';
import { routes } from '../../utils/const-routes';
import styles from './idp-tasks.module.scss';

const taskData = {
  name: 'Задача 1. Создание сервера. Подключение баз данных',
  dateStart: '12.01.2024',
  dateEnd: '03.03.2024',
  statusProgress: '',
  statusAccept: false,
  type: 'Практика',
  control: 'Собеседование',
  description: 'Создать сервер с использованием языка программирования Python и фреймворка Flask, который будет обрабатывать запросы пользователей и возвращать им соответствующие данные. Сервер должен быть доступен через HTTP-протокол, а также иметь возможность обрабатывать запросы на стороне сервера и на стороне клиента. Сервер должен обеспечивать безопасность данных пользователей и защиту от несанкционированного доступа.'
}

const IdpTasks = () => {
  const location = useLocation();
  const params = useParams();

  const pathUserId = params.user_id;

  const count = 2;

  const pathResolve = () => {
    if (location.pathname.includes(routes.employee)) {
      return routes.employeeIdp;
    }
    if (location.pathname.includes(routes.head)) {
      return routes.headStaff + '/' + pathUserId;
    }
  }

  return (
    <>
      <ButtonBack path={pathResolve()} />
      <div className={styles.container}>
        <h1 className={styles.title}>
          ИПР 2. Разработчик на Python. Уровень Middle
        </h1>
        <ul className={styles.tasks}>
          {[...Array(count)].map((item, index) => <IdpTask data={taskData} key={`idp-task${index}`} />)}
        </ul>
      </div>
    </>
  )
}

export default IdpTasks;
