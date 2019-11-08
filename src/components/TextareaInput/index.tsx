import * as React from 'react'

import style from './TextareaInput.module.scss'

interface TextareaInputProps {
  id: string
  name?: string
  onChange?: any
  status?: string
  statusText?: string
  value?: any
}


declare const props: TextareaInputProps;

function getClassName(status = '') {
  const mainClass = 'textarea-input';
  const statusClass = status ? `textarea-input-${status}-status` : '';

  return `${style[mainClass]} ${style[statusClass]}`;
}

const TextareaInput: React.FC<TextareaInputProps> = (props) => {
  const className = getClassName(props.status);

  return (
    <textarea
      className={className}
      id={props.id}
      name={props.name}
      onChange={props.onChange}
      value={props.value}
    />
  )
}

TextareaInput.defaultProps = {
  status: ''
}

export default TextareaInput;
