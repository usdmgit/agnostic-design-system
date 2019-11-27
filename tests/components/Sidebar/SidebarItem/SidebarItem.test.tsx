import React from 'react';
import { render } from '@testing-library/react';
import SidebarItem from '../../../../src/components/Sidebar/SidebarItem';

describe('SidebarItem', () => {
  const ICON = 'path/to/icon.svg';

  const getComponent = (
    text = 'item',
    icon: string = ICON,
    wrapperClassName = '',
    active = false,
    fixedBottom = false,
    onClick = () => {},
  ) => {
    return render(
      <SidebarItem
        text={text}
        icon={icon}
        active={active}
        fixedBottom={fixedBottom}
        onClick={onClick}
        wrapperClassName={wrapperClassName}
      />,
    );
  };

  it('renders without crashing', () => {
    const sidebarItem = getComponent();
    return expect(sidebarItem!).toMatchSnapshot();
  });

  it('renders the item with an icon', () => {
    const { getByRole } = getComponent('item', ICON);
    const imgIcon = getByRole('img');
    expect(imgIcon).toHaveProperty('src', expect.stringContaining(ICON));
  });

  it('assigns the item text', () => {
    const itemText = 'Super cool link';
    const { getByText } = getComponent(itemText);
    expect(getByText(itemText)).toBeTruthy();
  });

  it('renders active items', () => {
    const { getByRole } = getComponent('text', ICON, '', true);
    const node = getByRole('listitem');

    expect(node).toHaveProperty('className', `menu-item active`);
  });

  it('renders fixed items at the bottom', () => {
    const { getByRole } = getComponent('text', ICON, '', false, true);
    const node = getByRole('listitem');

    expect(node).toHaveProperty('className', `menu-item fixed-bottom`);
  });

  it('accepts a custom wrapper class', () => {
    const customClass = 'test-class-name';
    const { getByRole } = getComponent('text', ICON, customClass);
    const node = getByRole('listitem');

    expect(node).toHaveProperty('className', `menu-item ${customClass}`);
  });
});
