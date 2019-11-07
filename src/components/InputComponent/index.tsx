import * as React from 'react'

import TextInput from '../TextInput'
import DateInput from '../DateInput';

type Type = 'text' | 'date'
type Status = 'success' | 'error'
type iconPosition = 'left' | 'right';

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

const InputComponent: React.FC<InputProps> = (props) => {
  const components = {
    text: TextInput,
    date: DateInput
  }

  const InputComponent = components[props.type!];

  return (
    <InputComponent {...props} />
  )
}

export default InputComponent;
