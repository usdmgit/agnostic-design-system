import * as React from 'react'

import TextInput from '../TextInput'

import style from './Input.module.scss'

type Type = 'text'
type Status = 'success' | 'error'

const errorStatus = 'error';
const successStatus = 'success';
const typeName = 'text';

interface InputProps {
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


const Input: React.FC<InputProps> = ({ ...props }) => {
  const statusClassName = `${style['input-status-message']} ${style['input-' + props.status + '-message-color']}`;

  return (
    <div className={`${style['input-container']} ${props.wrapperClass}`}>
      <div className={style['label']}>
        {props.label && (
          <label htmlFor={props.id}>
            {props.label}
          </label>
        )}
      </div>
      <div>
        {props.type!.toLowerCase() === typeName && (
          <TextInput
            id={props.id}
            name={props.name}
            onChange={props.onChange}
            status={props.status}
            statusText={props.statusText}
            value={props.value}
          />
        )}
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
  type: 'text'
}

export default Input;
