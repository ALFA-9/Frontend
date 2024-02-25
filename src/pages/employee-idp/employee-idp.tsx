import styles from './employee-idp.module.scss'
import { FC } from 'react'
import Tabs from '../../ui/tabs/tabs'
import TabPane from '../../ui/tabs/tab-pane/tab-pane'
import ButtonAccent from '../../ui/buttons/button-accent/button-accent'
import { routes } from '../../utils/const-routes'
import IdpCard from '../../components/idp-card/idp-card'
import ButtonBack from '../../ui/buttons/button-back/button-back'
import { useAppSelector } from '../../redux/hooks'
import { UserTypeIdp } from '../../api/api-types'

const Idp: FC = () => {
  const actualUser = useAppSelector(state => state.activeUser.user)

  let doneIdp: UserTypeIdp[] = []
  let cancelledIdp: UserTypeIdp[] = []
  let inWorkIdp: UserTypeIdp[] = []
  let notCompletedIdp: UserTypeIdp[] = []

  actualUser.idps.forEach(item => {
    switch (item.status_idp) {
      case 'done':
        doneIdp = [...doneIdp, item]
        break

      case 'cancelled':
        cancelledIdp = [...cancelledIdp, item]
        break

      case 'in_work':
        inWorkIdp = [...inWorkIdp, item]
        break

      case 'not_completed':
        notCompletedIdp = [...notCompletedIdp, item]
        break

      default:
        break
    }
  })

  return (
    <div className={styles.container}>
      <ButtonBack path={routes.main} />
      <h1 className={styles.title}>Индивидуальный план развития</h1>
      <Tabs>
        <TabPane title="В работе">
          {inWorkIdp.length > 0 && (
            <IdpCard data={inWorkIdp[0]} extraInfo={true} />
          )}
          {!(inWorkIdp.length > 0) && (
            <>
              <p className={styles.message}>
                У вас сейчас нет назначенного индивидуального плана развития.
              </p>
              <p className={styles.message}>
                Подайте заявку вашему руководителю.
              </p>
              <ButtonAccent
                path={routes.employeeIdpForm}
                title="Подать заявку на ИПР"
                extraClass={styles.button}
              />
            </>
          )}
          <ButtonAccent
            path={routes.employeeIdpForm}
            title="Подать заявку на ИПР"
            extraClass={styles.button}
          />
        </TabPane>
        <TabPane title="Выполнен">
          {doneIdp.length > 0 && (
            <ul className={styles.idp_list}>
              {doneIdp.map(item => (
                <IdpCard data={item} key={item.title} />
              ))}
            </ul>
          )}
          {!(doneIdp.length > 0) && (
            <p className={styles.message}>Пока у вас нет выполненных ИПР.</p>
          )}
        </TabPane>
        <TabPane title="Не выполнен">
          {notCompletedIdp.length > 0 && (
            <ul className={styles.idp_list}>
              {notCompletedIdp.map(item => (
                <IdpCard data={item} key={item.title} />
              ))}
            </ul>
          )}
          {!(notCompletedIdp.length > 0) && (
            <p className={styles.message}>У вас нет невыполненных ИПР.</p>
          )}
        </TabPane>
        <TabPane title="Отменен">
          {cancelledIdp.length > 0 && (
            <ul className={styles.idp_list}>
              {cancelledIdp.map(item => (
                <IdpCard data={item} key={item.title} />
              ))}
            </ul>
          )}
          {!(cancelledIdp.length > 0) && (
            <p className={styles.message}>
              На данный момент отмененных ИПР нет.
            </p>
          )}
        </TabPane>
      </Tabs>
    </div>
  )
}

export default Idp
