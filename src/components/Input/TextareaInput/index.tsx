import * as React from 'react';

import style from './TextareaInput.module.scss';

interface PropTypes {
  id?: string;
  name?: string;
  onChange: (value: string) => void;
  placeholder?: string;
  statusClassname?: string;
  statusText?: string;
  value?: string;
}

const TextareaInput: React.FC<PropTypes> = (props: PropTypes) => (
  <textarea
    className={`${style.input} ${props.statusClassname}`}
    id={props.id}
    name={props.name}
    onChange={e => props.onChange(e.target.value)}
    value={props.value}
  />
);

TextareaInput.defaultProps = {
  statusClassname: '',
};

export default TextareaInput;
