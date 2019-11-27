import React from 'react';
import { render } from '@testing-library/react';
import SidebarMenu from '../../../../src/components/Sidebar/SidebarMenu';

describe('SidebarMenu', () => {
  const getComponent = (text = 'menu', wrapperClassName = '') => {
    return render(
      <SidebarMenu wrapperClassName={wrapperClassName}>{text}</SidebarMenu>,
    );
  };

  it('renders without crashing', () => {
    const sidebarMenu = getComponent();
    return expect(sidebarMenu!).toMatchSnapshot();
  });

  it('accepts a custom wrapper class', () => {
    const customClass = 'test-class-name';
    const { getByRole } = getComponent('menu', customClass);
    const node = getByRole('navigation');

    expect(node).toHaveProperty('className', `menu ${customClass}`);
  });

  it('renders children components', () => {
    const text = 'Avison Young';
    const menu = getComponent(text);
    return expect(menu!.findByDisplayValue(text)).toBeTruthy();
  });
});
