import React from 'react';
import classNames from 'classnames';

interface PropTypes {
  /**
   * You can pass a custom class to the `<Row>` element
   */
  customClassName?: string;

  children?: React.ReactNode;
}

const Row: React.FC<PropTypes> = (props: PropTypes) => {
  const { customClassName, children, ...attributes } = props;

  return (
    <div {...attributes} className={classNames('ay-row', customClassName)}>
      {children}
    </div>
  );
};

export default Row;
