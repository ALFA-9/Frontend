import styles from './employee-idp.module.scss'
import { FC } from 'react'
import Tabs from '../../ui/tabs/tabs'
import TabPane from '../../ui/tabs/tab-pane/tab-pane'
import ButtonAccent from '../../ui/buttons/button-accent/button-accent'
import { routes } from '../../utils/const-routes'

const EmployeeIdp: FC = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Индивидуальный план развития</h1>
      <Tabs>
        <TabPane title='В работе'>
          <p className={styles.message}>
            У вас сейчас нет назначенного индивидуального плана развития.
          </p>
          <p className={styles.message}>
            Подайте заявку вашему руководителю.
          </p>
        </TabPane>
        <TabPane title='Выполнен'>
          <p className={styles.message}>Пока у вас нет выполненных ИПР.</p>
        </TabPane>
        <TabPane title='Не выполнен'>
          <p className={styles.message}>
            Отличная работа! У вас нет невыполненных ИПР.
          </p>
        </TabPane>
        <TabPane title='Отменен'>
          <p className={styles.message}>
            На данный момент отмененных ИПР нет.
          </p>
        </TabPane>
      </Tabs>
      <ButtonAccent
        path={routes.employeeIdpForm}
        title='Подать заявку на ИПР'
        extraClass={styles.button}
      />
    </div>
  )
}

export default EmployeeIdp
