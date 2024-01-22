import styles from './tabs.module.scss';
import { useState, ReactElement, FC } from 'react';
import Tab, { TTabProps } from './tab/tab';

export type TTabsProps = {
  children: ReactElement<TTabProps>[],
  preActiveTabIndex?: number
}

const Tabs: FC<TTabsProps> = props => {
  const { children, preActiveTabIndex } = props;
  const [activeTabIndex, setActiveTabIndex] = useState<number>(preActiveTabIndex || 0);

  return (
    <div className={styles.container}>
      <ul className={styles.tabs}>
        {children.map((child, index) => (
          <Tab
            key={child.props.title}
            title={child.props.title}
            index={index}
            isActive={index === activeTabIndex}
            setActiveTab={setActiveTabIndex}
          />
        ))}
      </ul>
      <div className={styles.content}>
        {children[activeTabIndex]}
      </div>
    </div>
  )
}

export default Tabs;
