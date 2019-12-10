import React, { useState } from 'react';
import classnames from 'classnames';

import style from './PasswordInput.module.scss';

type PropTypes = {
  id?: string;
  name?: string;
  onChange: (value: string) => void;
  placeholder?: string;
  statusClassname?: string;
  value?: string;
  isReadOnly?: boolean;
};

const PasswordInput: React.FC<PropTypes> = (props: PropTypes) => {
  const [inputTypeIndex, setInputTypeIndex] = useState(1);

  const types = ['text', 'password'];
  const type = types[inputTypeIndex];

  return (
    <div className={style.container}>
      <input
        id={props.id}
        className={classnames(style.input, props.statusClassname)}
        name={props.name}
        onChange={e => props.onChange(e.target.value)}
        placeholder={props.placeholder}
        type={type}
        value={props.value}
        readOnly={props.isReadOnly}
      />
      <button
        aria-label="Reveal Password"
        className={classnames(style.button, style[type])}
        id={`btn-${props.id!}`}
        onClick={() => setInputTypeIndex(inputTypeIndex ? 0 : 1)}
        type="button"
      />
    </div>
  );
};

export default PasswordInput;
