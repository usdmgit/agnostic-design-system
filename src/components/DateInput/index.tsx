import * as React from 'react'

import style from './DateInput.module.scss'
import { string } from 'prop-types';

type iconPositionType = 'left' | 'right';

interface DateInputProps {
  iconPosition?: iconPositionType
  id: string
  name?: string
  onChange?: any
  status?: string
  statusText?: string
  value?: any
}


declare const props: DateInputProps;

function getClassName(status: string, iconPosition: string) {
  const mainClass = 'date-input';
  const positionClass = iconPosition ? `icon-position-${iconPosition}` : '';
  const statusClass = status ? `date-input-${status}-status` : '';

  return `${style[mainClass]} ${style[positionClass]} ${style[statusClass]}`;
}

const DateInput: React.FC<DateInputProps> = (props) => {
  const className = getClassName(props.status || '', props.iconPosition || '');

  return (
    <input
      className={className}
      id={props.id}
      name={props.name}
      onChange={props.onChange}
      type='date'
      value={props.value}
    />
  )
}

DateInput.defaultProps = {
  status: ''
}

export default DateInput;
