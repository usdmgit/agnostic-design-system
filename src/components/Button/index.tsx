import * as React from 'react';
import style from './Button.module.scss';

export type Type = 'main' | 'secondary' | 'ghost' | 'contextual' | 'inline';
type IconPosition = 'left' | 'right' | undefined;
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

const getIconPositionClassname = (iconPosition: IconPosition) => (
  iconPosition ? style[iconPosition] : ''
)

const Button: React.FC<PropTypes> = (props: PropTypes) => {
  const { disabled, iconPosition, id, label, name, onClick, size, type } = props;

  return (<button
    type="button"
    className={`${style.button} ${style[type!]} ${getIconPositionClassname(iconPosition)}`}
    disabled={disabled}
    onClick={onClick}
  >
    {label}
  </button>)
};

Button.defaultProps = {
  type: 'main',
};

export default Button;
