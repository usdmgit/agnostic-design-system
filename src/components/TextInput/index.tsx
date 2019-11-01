import React from 'react'
import style from './TextInput.module.scss'

type TextInputProps = { name: string; value?: string }

const Index = ({ name, value }: TextInputProps) => (
  <input
    className={style['text-input']}
    type="text"
    name={name}
    value={value}
  />
)

export default Index
