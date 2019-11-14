import * as React from 'react';
import style from './Button.module.scss';

export type Type = 'main' | 'secondary' | 'ghost' | 'contextual' | 'inline';
export type IconPosition = 'left' | 'right' | undefined;
export type Size = 'regular' | 'small';

type PropTypes = {
  disabled?: boolean;
  iconPosition?: IconPosition;
  id?: string;
  label?: string;
  name?: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  size?: Size;
  type?: Type;
};

const getIconPositionClassname = (iconPosition: IconPosition) =>
  iconPosition ? style[`${iconPosition}-icon`] : '';

const getButtonSize = (size: Size) => (size ? style[`${size}-size`] : '');

const Button: React.FC<PropTypes> = (props: PropTypes) => {
  const { disabled, iconPosition, label, onClick, size, type } = props;

  return (
    <button
      type="button"
      className={`${style.button} ${style[type!]} ${getIconPositionClassname(
        iconPosition,
      )} ${getButtonSize(size!)}`}
      disabled={disabled}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

Button.defaultProps = {
  size: 'regular',
  type: 'main',
};

export default Button;
