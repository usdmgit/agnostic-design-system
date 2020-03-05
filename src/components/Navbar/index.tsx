import React from 'react';
import classnames from 'classnames';
import styles from './Navbar.module.scss';

type PropTypes = {
  wrapperClassName?: string;
  leftItems?: Array<JSX.Element>;
  rightItems?: Array<JSX.Element>;
};

const renderNavbarItem = (item: JSX.Element, style: string) => {
  if (!item) return null;
  return <div className={classnames(styles.item, style)}>{item}</div>;
};

const Navbar: React.FC<PropTypes> = (props: PropTypes) => {
  return (
    <div className={classnames(styles.navbar, props.wrapperClassName)}>
      <div className={styles.items}>
        {props.leftItems &&
          props.leftItems.map(item =>
            renderNavbarItem(item, styles['item-left']),
          )}
      </div>
      <div className={styles.items}>
        {props.rightItems &&
          props.rightItems.map(item =>
            renderNavbarItem(item, styles['item-right']),
          )}
      </div>
    </div>
  );
};

Navbar.defaultProps = {
  wrapperClassName: '',
  leftItems: [],
  rightItems: [],
};

export default Navbar;
