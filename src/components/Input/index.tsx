import React, { useState } from 'react';
import classNames from 'classnames';

import styles from '@/components/Input/Input.css';

import DefaultActionIcon from '@/assets/images/icons/web/close-icon.svg';

type Size = 'large' | 'medium';

interface Props {
  actionIcon?: React.ReactNode;
  allowedCharsRegex?: RegExp;
  customValidation?: (value: string) => boolean;
  description?: string;
  disabled?: boolean;
  id: string;
  invalidMessage?: string;
  label?: string | React.ReactNode;
  limit?: number;
  message?: string;
  onBlur?: () => void;
  onChange: (e: any) => void;
  onClickActionIcon: () => void;
  onFocus: () => void;
  onKeyDown?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  onStateChange: (state: boolean) => void;
  placeholder?: string;
  prepend?: React.ReactNode;
  required?: boolean;
  size: Size;
  value?: string;
  validationRegex?: string;
  variablesClassName?: string;
  withActionIcon?: boolean;
  withPrependSeparator?: boolean;
}

const VALID = 'valid';
const INVALID = 'invalid';

const getValidationState = valid => (valid ? VALID : INVALID);

const testsRegex = (value, regex) => new RegExp(regex).test(value);

const Input = React.forwardRef<HTMLInputElement, Props>((props, ref) => {
  const {
    description,
    disabled,
    id,
    label,
    message,
    onChange,
    onFocus,
    onMouseEnter,
    onMouseLeave,
    onBlur,
    onKeyDown,
    placeholder,
    size,
    value,
    variablesClassName,
    validationRegex,
    invalidMessage,
    limit,
    prepend,
    withPrependSeparator,
    actionIcon,
    withActionIcon,
    onClickActionIcon,
    onStateChange,
    required,
    allowedCharsRegex,
    customValidation,
    ...inputProps
  } = props;
  const [validationState, setValidationState] = useState('');
  const sizeClass = `input--${size}`;
  const prependSizeClass = `input--prepend-with-separator-${size}`;
  const messageValidateClass = `input--message-${validationState}`;
  const statusClass = `input--${validationState}`;

  const validate = (event, isValueValid, callback) => {
    const newValue = event.target.value;
    const hasValue = testsRegex(newValue, '.+');
    const matchesValidationRegex = testsRegex(newValue, validationRegex || '.*');
    const customValid = isValueValid(newValue);

    const valid = matchesValidationRegex && customValid;

    if (required) {
      callback(hasValue && valid);
      return;
    }

    callback(valid);
  };

  const applyFilter = e => {
    let value = e.target.value;

    if (allowedCharsRegex) {
      value = value.match(allowedCharsRegex)?.join('') || '';
    }

    e.target.value = value;
  };

  const handleBlur = event => {
    onBlur && onBlur();
    validate(event, customValidation, valid => {
      setValidationState(getValidationState(valid));
    });
  };

  const getActionIcon = actionIcon => {
    return actionIcon ? (
      <>{actionIcon}</>
    ) : (
      <DefaultActionIcon
        className={classNames(styles['input--action-icon'])}
        height='8'
        width='8'
      />
    );
  };

  const handleChange = e => {
    applyFilter(e);

    onChange(e);
    validate(e, customValidation, valid => {
      onStateChange(valid);
    });
  };

  const getLabel = () => {
    return React.isValidElement(label) ? (
      label
    ) : label ? (
      <label className={classNames(styles['input--label'])} htmlFor={id}>
        {label}
      </label>
    ) : (
      ''
    );
  };

  const getDescription = () => {
    return description ? (
      <span className={classNames(styles['input--description'])}>{description}</span>
    ) : (
      ''
    );
  };

  const getMessage = () => {
    return message || invalidMessage ? (
      <span className={classNames(styles['input--message'], styles[messageValidateClass])}>
        {validationState === INVALID && invalidMessage ? invalidMessage : message}
      </span>
    ) : (
      ''
    );
  };

  return (
    <div className={classNames(variablesClassName, styles.container)}>
      {getLabel()}
      {getDescription()}
      <div className={classNames(styles['input--container'])}>
        <input
          {...inputProps}
          ref={ref}
          className={classNames(
            styles.input,
            styles[sizeClass],
            styles[statusClass],
            !!prepend && !withPrependSeparator ? styles['input-with-prepend'] : '',
            withPrependSeparator ? styles['input-with-prepend-separator'] : ''
          )}
          disabled={disabled}
          id={id}
          onChange={handleChange}
          placeholder={placeholder}
          value={value}
          onFocus={() => {
            setValidationState('');
            onFocus();
          }}
          onKeyDown={onKeyDown}
          onBlur={handleBlur}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          maxLength={limit}
        />
        {!!prepend && (
          <div
            className={classNames(
              styles['input--prepend'],
              withPrependSeparator ? styles[prependSizeClass] : '',
              withPrependSeparator ? styles['input--prepend-with-separator'] : ''
            )}
          >
            {prepend}
          </div>
        )}

        {withActionIcon && (
          <div
            className={classNames(styles['input--action-icon-container'])}
            onClick={onClickActionIcon}
          >
            {getActionIcon(actionIcon)}
          </div>
        )}
      </div>
      {getMessage()}
    </div>
  );
});

Input.defaultProps = {
  size: 'large',
  onFocus: () => {},
  onStateChange: state => state,
  onChange: e => e,
  customValidation: () => true
};

export default Input;
