import * as React from 'react';

import style from './Text.module.scss';

export type Type = 'body-content' | 'title';

type PropTypes = {
  /** Sets custom CSS class on the component. */
  customClassName?: string;

  /** Sets the number of visible characters.  If defined, it cuts the text at the specified length and adds ... at the end. */
  maxLength?: number;

  /** 'body-content' | 'title' */
  type?: Type;

  /** The text to display */
  value: string;
};

const getTextToDisplay = (props: PropTypes) =>
  props.maxLength
    ? `${props.value.substr(0, props.maxLength)} ...`
    : props.value;

const Text: React.FC<PropTypes> = (props: PropTypes) => {
  const { type, customClassName } = props;
  return (
    <span className={`${style[type!]} ${customClassName}`}>
      {getTextToDisplay(props)}
    </span>
  );
};

Text.defaultProps = {
  type: 'body-content',
  customClassName: '',
};

export default Text;
