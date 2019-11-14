import * as React from 'react';

import TextInput from './TextInput';
import DateInput from './DateInput';
import TextareaInput from './TextareaInput';

import style from './Input.module.scss';

type Status = 'success' | 'error' | undefined;
export type Type = 'text' | 'textarea' | 'date';

interface PropTypes {
  iconPosition?: 'left' | 'right';
  id?: string;
  label?: string;
  name?: string;
  onChange: (value: string) => void;
  placeholder?: string;
  status?: Status;
  statusText?: string;
  type?: Type;
  value?: string;
  wrapperClassname?: string;
}

const getStatusMessageClassname = (status: Status) =>
  status ? style[`status-message-${status}`] : '';

const Input: React.FC<PropTypes> = (props: PropTypes) => {
  const { wrapperClassname, type, id, label, status, statusText } = props;
  const components = {
    text: TextInput,
    textarea: TextareaInput,
    date: DateInput,
  };

  const Component = components[type!];

  return (
    <div className={`${style.wrapper} ${wrapperClassname}`}>
      {label && (
        <div className={style.label}>
          <label htmlFor={id}>{label}</label>
        </div>
      )}
      <div className={style['input-container']}>
        <Component {...props} statusClassname={style[`${status}-status`]} />
      </div>
      {status && statusText && (
        <span
          className={`${style['status-message']} ${getStatusMessageClassname(
            status,
          )}
            `}
        >
          {statusText}
        </span>
      )}
    </div>
  );
};

Input.defaultProps = {
  iconPosition: 'right',
  type: 'text',
  wrapperClassname: '',
};

export default Input;
