import * as React from 'react'

import InputComponent from '../InputComponent';

import style from './Input.module.scss'

type Type = 'text' | 'date' | 'textarea'
type Status = 'success' | 'error'
type iconPosition = 'left' | 'right';

const TEXT_TYPE_NAME = 'text';
const DEFAULT_ICON_POSITION = 'right';

interface InputProps {
  iconPosition?: iconPosition
  id: string
  label?: string
  name?: string
  onChange: (value: string) => void
  status?: Status
  statusText?: string
  type?: Type
  value?: string | number | Date
  wrapperClass?: string
}

declare const props: InputProps;

function getStatusClassName(status: string) {
  const statusClass = status ? `input-${status}-message-color` : '';
  return `${style['input-status-message']} ${style[statusClass]}`;
}

const Input: React.FC<InputProps> = (props) => {
  const containerClassName = `${style['input-container']} ${props.wrapperClass}`;
  const statusClassName = getStatusClassName(props.status || '');

  return (
    <div className={containerClassName}>
      <div className={style.label}>
        {props.label && (
          <label htmlFor={props.id}>
            {props.label}
          </label>
        )}
      </div>
      <div>
        <InputComponent {...props} />
      </div>
      {(props.status && props.statusText) && (
        <div className={statusClassName}>
          <p>{props.statusText}</p>
        </div>
      )} 
    </div>
  )
}

Input.defaultProps = {
  iconPosition: DEFAULT_ICON_POSITION,
  type: TEXT_TYPE_NAME
}

export default Input;
