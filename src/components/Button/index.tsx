import * as React from 'react';
import classnames from 'classnames';

import style from './Button.module.scss';

export type Type =
  | 'main'
  | 'secondary'
  | 'ghost'
  | 'contextual'
  | 'inline'
  | 'delete';
export type IconPosition = 'left' | 'right' | undefined;
export type Size = 'regular' | 'small';

type PropTypes = {
  isDisabled?: boolean;
  id?: string;
  label?: string;
  name?: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  wrapperClassName?: string;

  /** 'left' | 'right' */
  iconPosition?: IconPosition;

  /** 'regular' | 'small' */
  size?: Size;

  /** 'main' | 'secondary' | 'ghost' | 'contextual' | 'inline' | 'delete' */
  type?: Type;
};

const Button: React.FC<PropTypes> = (props: PropTypes) => {
  const { isDisabled, iconPosition, label, onClick, size, type } = props;

  const iconPositionClassname = style[`${iconPosition}-icon`];
  const buttonSizeClassname = style[`${size}-size`];

  return (
    <button
      type="button"
      className={classnames(
        style.button,
        style[type!],
        { [iconPositionClassname]: iconPosition },
        { [buttonSizeClassname]: size },
        props.wrapperClassName,
      )}
      disabled={isDisabled}
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
