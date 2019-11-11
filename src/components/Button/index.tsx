import * as React from 'react';
import style from './Button.module.scss';

export type Type = 'main' | 'secondary' | 'ghost' | 'contextual' | 'inline';
type IconPosition = 'left' | 'right';
type Size = 'regular' | 'small';

type PropTypes = {
  disabled?: boolean;
  iconPosition?: IconPosition;
  id?: string;
  label?: string;
  name?: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  size?: Size;
  type?: Type;
}

const Button: React.FC<PropTypes> = (props: PropTypes) => {
  return (
    <button
      type="button"
      className={`${style.button} ${style[props.type!]}`}
      disabled={props.disabled}
      onClick={props.onClick}
    >
      {props.label}
    </button>
  );
};

Button.defaultProps = {
  type: 'main',
};

export default Button;
