import React from 'react';
import classnames from 'classnames';
import styles from './SidebarMenu.module.scss';

type PropTypes = {
  children: React.ReactNode;
  wrapperClassName?: string;
};

const SidebarMenu: React.FC<PropTypes> = (props: PropTypes) => {
  return (
    <nav className={classnames(styles.menu, props.wrapperClassName)}>
      <ul className={styles['list-items']}>{props.children}</ul>
    </nav>
  );
};

export default SidebarMenu;
