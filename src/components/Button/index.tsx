import React from 'react';
import classNames from 'classnames';
import styles from './Button.module.sass';

interface Props {
  title?: string;
  wrapperClassName?: string;
  onClick: () => void;
}

const Button: React.FC<Props> = props => {
  return (
    <button
      onClick={props.onClick}
      title={props.title}
      type='button'
      className={classNames([styles.button, props.wrapperClassName])}
    >
      {props.title}
    </button>
  );
};

export default Button;
