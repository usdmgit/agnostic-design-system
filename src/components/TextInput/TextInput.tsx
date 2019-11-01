import React from 'react'

type TextInputProps = { name: string; value?: string }

const TextInput = ({ name, value }: TextInputProps) => (
  <input type="text" name={name} value={value} />
)

export default TextInput
