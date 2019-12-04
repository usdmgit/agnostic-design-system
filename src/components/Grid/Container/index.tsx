import React from 'react';
import classNames from 'classnames';

interface PropTypes {
  /**
   * You can pass a custom class to the `<Container>` element
   */
  wrapperClassName?: string;

  children?: React.ReactNode;
}

const Container: React.FC<PropTypes> = (props: PropTypes) => {
  const { wrapperClassName, children, ...attributes } = props;

  return (
    <div
      {...attributes}
      className={classNames('ay-container', wrapperClassName)}
    >
      {children}
    </div>
  );
};

export default Container;
