import React from 'react';
import { render } from '@testing-library/react';
import PageContent from '../../../../src/components/Sidebar/PageContent';

describe('PageContent', () => {
  const getComponent = (
    content = 'content',
    wrapperClassName = '',
    withSidebar = true,
  ) => {
    return render(
      <PageContent
        wrapperClassName={wrapperClassName}
        withSidebar={withSidebar}
      >
        {content}
      </PageContent>,
    );
  };

  it('renders without crashing', () => {
    const component = getComponent();
    return expect(component!).toMatchSnapshot();
  });

  it('accepts a custom class', () => {
    const wrapperClassName = 'custom-class-name';
    const { getByText } = getComponent('content', wrapperClassName);
    const node = getByText('content');
    expect(node).toHaveProperty(
      'className',
      `with-sidebar ${wrapperClassName}`,
    );
  });

  it('renders children components', () => {
    const text = 'Avison Young';
    const container = getComponent(text);

    return expect(container!.findByDisplayValue(text)).toBeTruthy();
  });

  describe('when withSidebar is false', () => {
    it('removes the sidebar padding', () => {
      const { getByText } = getComponent('content', '', false);
      const node = getByText('content');
      expect(node).toHaveProperty('className', ``);
    });
  });
});
