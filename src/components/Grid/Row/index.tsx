import React from 'react';
import classNames from 'classnames';

interface PropTypes {
  /**
   * You can pass a custom class to the `<Row>` element
   */
  wrapperClassName?: string;

  children?: React.ReactNode;
}

const Row: React.FC<PropTypes> = (props: PropTypes) => {
  const { wrapperClassName, children, ...attributes } = props;

  return (
    <div {...attributes} className={classNames('ay-row', wrapperClassName)}>
      {children}
    </div>
  );
};

export default Row;
