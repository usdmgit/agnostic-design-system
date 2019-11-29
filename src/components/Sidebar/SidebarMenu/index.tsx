import React, { useLayoutEffect, useState } from 'react';
import classnames from 'classnames';
import SidebarItem, {
  PropTypes as SidebarItemType,
} from '../SidebarItem/index';
import styles from './SidebarMenu.module.scss';

type PropTypes = {
  wrapperClassName?: string;
  items: Array<SidebarItemType>;
};

const SidebarMenu: React.FC<PropTypes> = (props: PropTypes) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  useLayoutEffect(() => {
    if (menuOpen) {
      document.addEventListener('click', closeMenu);
    } else {
      document.removeEventListener('click', closeMenu);
    }

    return () => document.removeEventListener('click', closeMenu);
  }, [menuOpen]);

  const getActiveItemAsMenu = () => {
    let activeItem = props.items.find(item => item.isActive);

    if (!activeItem) {
      [activeItem] = props.items;
    }

    return {
      ...activeItem,
      onClick: () => setMenuOpen(!menuOpen),
    };
  };

  const getFixedItem = () => {
    return props.items.find(item => item.isFixed);
  };

  const renderSidebarItem = (
    item: SidebarItemType | undefined,
    key: string,
  ) => {
    if (!item) return null;

    return (
      <SidebarItem
        key={key}
        text={item.text}
        icon={item.icon}
        wrapperClassName={item.wrapperClassName}
        isActive={item.isActive}
        isFixed={item.isFixed}
        onClick={item.onClick}
      />
    );
  };

  return (
    <nav className={classnames(styles.menu, props.wrapperClassName)}>
      <ul className={classnames(styles['mobile-header'])}>
        {renderSidebarItem(getActiveItemAsMenu(), 'mobile-header-active')}
        {renderSidebarItem(getFixedItem(), 'mobile-header-fixed-item')}
      </ul>

      <ul
        className={classnames(styles['list-items'], {
          [styles.open]: menuOpen,
        })}
      >
        {props.items.map(item => renderSidebarItem(item, item.text))}
      </ul>
    </nav>
  );
};

export default SidebarMenu;
