import * as React from 'react';
import classnames from 'classnames';
import style from './TextInput.module.scss';

export type IconPosition = 'left' | 'right' | undefined;

interface PropTypes {
  id?: string;
  name?: string;
  onChange: (value: string) => void;
  placeholder?: string;
  statusClassname?: string;
  value?: string;
  isReadOnly?: boolean;
  icon?: string;
  iconAlt?: string;
  iconPosition?: IconPosition;
}

const TextInput: React.FC<PropTypes> = (props: PropTypes) => (
  <div className={style.container}>
    {props.icon && (
      <img
        src={props.icon}
        alt={props.iconAlt}
        className={classnames(
          style.icon,
          style[`icon-position-${props.iconPosition}`],
        )}
      />
    )}
    <input
      className={classnames(
        style[`input-${props.iconPosition}`],
        props.statusClassname,
      )}
      id={props.id}
      name={props.name}
      onChange={e => props.onChange(e.target.value)}
      placeholder={props.placeholder}
      readOnly={props.isReadOnly}
      type="text"
      value={props.value}
    />
  </div>
);

TextInput.defaultProps = {
  iconPosition: 'right',
  statusClassname: '',
};

export default TextInput;
