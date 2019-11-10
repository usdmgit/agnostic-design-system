import * as React from 'react';

import style from './TextInput.module.scss';

interface TextInputProps {
  id: string;
  name?: string;
  onChange?: any;
  status?: string;
  statusText?: string;
  value?: any;
}

declare const props: TextInputProps;

function getStatusClassName(status: string) {
  let statusClass = status ? `input-${status}-status` : '';
  return `${style.input} ${style[statusClass]}`;
}

const TextInput: React.FC<TextInputProps> = props => {
  let className = getStatusClassName(props.status || '');

  return (
    <input
      className={className}
      id={props.id}
      name={props.name}
      onChange={props.onChange}
      type="text"
      value={props.value}
    />
  );
};

TextInput.defaultProps = {
  status: '',
};

export default TextInput;
