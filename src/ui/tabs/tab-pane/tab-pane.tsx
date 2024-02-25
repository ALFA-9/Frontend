import { ReactElement, FC } from 'react'

type TTabPaneProps = {
  title: string
  children: ReactElement | ReactElement[]
}

const TabPane: FC<TTabPaneProps> = ({ children }) => <>{children}</>

export default TabPane
