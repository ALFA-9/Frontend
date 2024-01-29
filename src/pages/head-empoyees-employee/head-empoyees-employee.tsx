import { FC } from 'react'
import styles from './head-empoyees-employee.module.scss'
import avatar from '../../images/_temp/template.jpeg'
import Tabs from '../../ui/tabs/tabs'
import TabPane from '../../ui/tabs/tab-pane/tab-pane'
import TextArea from '../../ui/text-area/text-area'
import CompetenciesTable from '../../components/competencies-table/competencies-table'
import {
  hardSkillsCompetencies,
  softSkillsCompetencies,
} from '../../utils/_temp/const-competencies-tables'
import { idpDataTempArr } from '../../utils/_temp/const-idp-data_temp'
import IdpCard from '../../components/idp-card/idp-card'
import ButtonBack from '../../ui/buttons/button-back/button-back'
import { useLocation, useNavigate } from 'react-router-dom'
import ButtonAccent from '../../ui/buttons/button-accent/button-accent'
import { routes } from '../../utils/const-routes'

const HeadEmpoyeesEmployee: FC = () => {
  const location = useLocation()
  const navigate = useNavigate()

  const handleNewIdpClick = () => {
    navigate(location.pathname + '/form')
  }

  return (
    <>
      <ButtonBack path={routes.headStaff} />
      <div className={`${styles.title_wrapper}`}>
        <img className={styles.title_img} src={avatar} alt='#' />
        <h1 className={styles.title}>HeadEmpoyeesEmployee</h1>
      </div>
      <Tabs extraContainerStyles={styles.extra_container_styles}>
        <TabPane title='Не выполнен'>
          <section aria-label='Личная информация' className={styles.tab_child}>
            <TextArea context={'Департамент'} content={'Отдел рекламы'} />
            <div className={styles.extra_text_wrapper}>
              <TextArea
                context={'Должность'}
                content={'Backend-разработчик'}
              />
              <TextArea context={'Грейд'} content={'Junior +'} />
            </div>
          </section>
          <section className={styles.competencies_container}>
            <h2 className={styles.competencies_title}>Компетенции</h2>
            <p className={styles.competencies_data}>Данные от 15.09.23</p>
            <CompetenciesTable
              title={softSkillsCompetencies.title}
              scors={softSkillsCompetencies.scors}
            />
            <CompetenciesTable
              title={hardSkillsCompetencies.title}
              scors={hardSkillsCompetencies.scors}
            />
          </section>
        </TabPane>
        <TabPane title='Индивидуальный план развития'>
          <ul className={styles.idp_list}>
            {idpDataTempArr.map((item) => (
              <IdpCard data={item} key={item.title} isHead={true} />
            ))}
          </ul>
          <div className={styles.button_accent}>
            <ButtonAccent
              title='Назначить новый ИПР'
              path={location.pathname + '/form'}
            />
          </div>
        </TabPane>
      </Tabs>
    </>
  )
}

export default HeadEmpoyeesEmployee
