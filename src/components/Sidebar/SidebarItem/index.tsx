import React from 'react';
import classnames from 'classnames';
import styles from './SidebarItem.module.scss';

type PropTypes = {
  text: string;
  icon: string;
  onClick: (event: React.MouseEvent<HTMLElement>) => void;
  wrapperClassName?: string;
  active?: boolean;
  fixedBottom?: boolean;
};

const SidebarItem: React.FC<PropTypes> = (props: PropTypes) => {
  return (
    <li
      className={classnames(
        styles['menu-item'],
        props.wrapperClassName,
        { [styles['fixed-bottom']]: props.fixedBottom },
        { [styles.active]: props.active },
      )}
    >
      <button
        type="button"
        className={styles['menu-item-clickable']}
        onClick={props.onClick}
      >
        <img
          src={props.icon}
          className={styles['menu-item-icon']}
          alt={props.text}
        />

        <span className={styles['menu-item-text']}>{props.text}</span>
      </button>
    </li>
  );
};

export default SidebarItem;
