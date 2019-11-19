import * as React from 'react';

import style from './PasswordInput.module.scss';

type PropTypes = {
  id?: string;
  name?: string;
  onChange: (value: string) => void;
  placeholder?: string;
  statusClassname?: string;
  value?: string;
};

const toggleInputType = (elementId: string) => {
  const passwordInput = document.getElementById(
    `${elementId}`,
  ) as HTMLInputElement;
  const imageButton = document.getElementById(
    `btn-${elementId}`,
  ) as HTMLButtonElement;

  if (passwordInput.type === 'password') {
    imageButton.className = `${style.button} ${style.text}`;
    passwordInput.type = 'text';
  } else {
    imageButton.className = `${style.button} ${style.password}`;
    passwordInput.type = 'password';
  }
};

const PasswordInput: React.FC<PropTypes> = (props: PropTypes) => (
  <div className={style.container}>
    <input
      id={props.id}
      className={`${style.input} ${props.statusClassname}`}
      name={props.name}
      onChange={e => props.onChange(e.target.value)}
      placeholder={props.placeholder}
      type="password"
      value={props.value}
    />
    <button
      aria-label="Reveal Password"
      className={`${style.button} ${style.password}`}
      id={`btn-${props.id!}`}
      onClick={() => toggleInputType(props.id!)}
      type="button"
    />
  </div>
);

export default PasswordInput;
