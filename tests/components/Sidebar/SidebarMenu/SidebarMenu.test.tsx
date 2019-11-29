import React from 'react';
import { render } from '@testing-library/react';
import SidebarMenu from '../../../../src/components/Sidebar/SidebarMenu';

describe('SidebarMenu', () => {
  const items = [
    {
      isActive: true,
      text: 'Menu text',
      onClick: () => {},
      icon: 'path/to/icon.svg',
    },
    {
      text: 'Menu text 2',
      onClick: () => {},
      icon: 'path/to/icon2.svg',
    },
  ];

  const getComponent = (wrapperClassName = '') => {
    return render(
      <SidebarMenu items={items} wrapperClassName={wrapperClassName} />,
    );
  };

  it('renders without crashing', () => {
    const sidebarMenu = getComponent();
    return expect(sidebarMenu!).toMatchSnapshot();
  });

  it('accepts a custom wrapper class', () => {
    const customClass = 'test-class-name';
    const { getByRole } = getComponent(customClass);
    const node = getByRole('navigation');

    expect(node).toHaveProperty('className', `menu ${customClass}`);
  });
});
