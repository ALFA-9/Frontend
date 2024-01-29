import styles from './employee-idp.module.scss'
import { FC, useState } from 'react'
import Tabs from '../../ui/tabs/tabs'
import TabPane from '../../ui/tabs/tab-pane/tab-pane'
import ButtonAccent from '../../ui/buttons/button-accent/button-accent'
import { routes } from '../../utils/const-routes'
import IdpCard from '../../components/idp-card/idp-card'
import {
  idpDataTemp,
  idpDataTempArr,
} from '../../utils/_temp/const-idp-data_temp'
import ButtonBack from '../../ui/buttons/button-back/button-back'

const Idp: FC = () => {
  const [isIdpInProgressExist, setIsIdpInProgressExist] =
    useState<boolean>(true)
  const [isIdpCompletedExist, setIsIdpCompletedExist] = useState<boolean>(true)
  const [isIdpFailedExist, setIsIdpFailedExist] = useState<boolean>(false)
  const [isIdpCancelledExist, setIsIdpCancelledExist] =
    useState<boolean>(false)

  return (
    <div className={styles.container}>
      <ButtonBack path={routes.main} />
      <h1 className={styles.title}>Индивидуальный план развития</h1>
      <Tabs>
        <TabPane title='В работе'>
          {isIdpInProgressExist && (
            <IdpCard data={idpDataTemp} extraInfo={true} />
          )}
          {!isIdpInProgressExist && (
            <>
              <p className={styles.message}>
                У вас сейчас нет назначенного индивидуального плана развития.
              </p>
              <p className={styles.message}>
                Подайте заявку вашему руководителю.
              </p>
              <ButtonAccent
                path={routes.employeeIdpForm}
                title='Подать заявку на ИПР'
                extraClass={styles.button}
              />
            </>
          )}
        </TabPane>
        <TabPane title='Выполнен'>
          {isIdpCompletedExist && (
            <ul className={styles.idp_list}>
              {idpDataTempArr.map((item) => (
                <IdpCard data={item} key={item.title} />
              ))}
            </ul>
          )}
          {!isIdpCompletedExist && (
            <p className={styles.message}>Пока у вас нет выполненных ИПР.</p>
          )}
        </TabPane>
        <TabPane title='Не выполнен'>
          {!isIdpFailedExist && (
            <p className={styles.message}>У вас нет невыполненных ИПР.</p>
          )}
        </TabPane>
        <TabPane title='Отменен'>
          {!isIdpCancelledExist && (
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
