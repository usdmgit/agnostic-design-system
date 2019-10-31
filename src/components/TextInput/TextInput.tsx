import * as React from "react";

type TextInputProps = { name: string; value?: string; }

const TextInput = (props: TextInputProps) =>
  <input type="text" name={props.name} value={props.value}/>;

export default TextInput;
