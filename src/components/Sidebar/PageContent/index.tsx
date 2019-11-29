import React from 'react';
import classNames from 'classnames';
import styles from './PageContent.module.scss';

interface PropTypes {
  customClassName?: string;
  children?: React.ReactNode;
}

const PageContent: React.FC<PropTypes> = (props: PropTypes) => {
  const { customClassName, children, ...attributes } = props;

  return (
    <div
      {...attributes}
      className={classNames(styles.content, customClassName)}
    >
      {children}
    </div>
  );
};

export default PageContent;
