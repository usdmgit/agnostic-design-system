import * as React from 'react';
import classnames from 'classnames';

import style from './DateInput.module.scss';

// @TODO: allow to pass Date as a type with a format
interface PropTypes {
  iconPosition?: 'left' | 'right';
  id?: string;
  name?: string;
  onChange: (value: string) => void;
  placeholder?: string;
  statusClassname?: string;
  statusText?: string;
  value?: string;
}

// @TODO: improve component as we work with different data types and formats
const DateInput: React.FC<PropTypes> = (props: PropTypes) => (
  <input
    className={classnames(
      style.input,
      style[`icon-position-${props.iconPosition}`],
      props.statusClassname,
    )}
    id={props.id}
    name={props.name}
    onChange={e => props.onChange(e.target.value)}
    placeholder={props.placeholder}
    type="date"
    value={props.value}
  />
);

DateInput.defaultProps = {
  iconPosition: 'right',
  statusClassname: '',
};

export default DateInput;
