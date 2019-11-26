import * as React from 'react';
import classnames from 'classnames';

import style from './TextInput.module.scss';

interface PropTypes {
  id?: string;
  name?: string;
  onChange: (value: string) => void;
  placeholder?: string;
  statusClassname?: string;
  value?: string;
}

const TextInput: React.FC<PropTypes> = (props: PropTypes) => (
  <input
    className={classnames(style.input, props.statusClassname)}
    id={props.id}
    name={props.name}
    onChange={e => props.onChange(e.target.value)}
    placeholder={props.placeholder}
    type="text"
    value={props.value}
  />
);

TextInput.defaultProps = {
  statusClassname: '',
};

export default TextInput;
