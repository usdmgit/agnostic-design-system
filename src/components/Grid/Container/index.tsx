import React from 'react';
import classNames from 'classnames';

interface PropTypes {
  /**
   * You can pass a custom class to the `<Container>` element
   */
  customClassName?: string;

  children?: React.ReactNode;
}

const Container: React.FC<PropTypes> = (props: PropTypes) => {
  const { customClassName, children, ...attributes } = props;

  return (
    <div
      {...attributes}
      className={classNames('ay-container', customClassName)}
    >
      {children}
    </div>
  );
};

export default Container;
