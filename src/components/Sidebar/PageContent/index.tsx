import React from 'react';
import classNames from 'classnames';
import styles from './PageContent.module.scss';

interface PropTypes {
  /**
   * If true it adds a padding to this component to avoid the content overlapping the sidebar menu.
   * Pass it as false when you're not using the SidebarMenu.
   */
  withSidebar?: boolean;

  wrapperClassName?: string;
  children?: React.ReactNode;
}

const PageContent: React.FC<PropTypes> = (props: PropTypes) => {
  const { wrapperClassName, children } = props;

  return (
    <div
      className={classNames(
        { [styles['with-sidebar']]: props.withSidebar },
        wrapperClassName,
      )}
    >
      {children}
    </div>
  );
};

PageContent.defaultProps = {
  withSidebar: true,
};

export default PageContent;
