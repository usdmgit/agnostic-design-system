import * as React from 'react';
import classnames from 'classnames';

import style from './TextareaInput.module.scss';

interface PropTypes {
  id?: string;
  name?: string;
  onChange: (value: string) => void;
  placeholder?: string;
  statusClassname?: string;
  statusText?: string;
  value?: string;
  isReadOnly?: boolean;
}

const TextareaInput: React.FC<PropTypes> = (props: PropTypes) => (
  <textarea
    className={classnames(style.input, props.statusClassname)}
    id={props.id}
    name={props.name}
    onChange={e => props.onChange(e.target.value)}
    value={props.value}
    readOnly={props.isReadOnly}
  />
);

TextareaInput.defaultProps = {
  statusClassname: '',
};

export default TextareaInput;
