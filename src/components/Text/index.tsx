import * as React from 'react';
import classnames from 'classnames';

import style from './Text.module.scss';

export type Type = 'body-content' | 'title' | 'heading';

type PropTypes = {
  /** Sets custom CSS class on the component. */
  wrapperClassName?: string;

  /** Sets the number of visible characters.  If defined, it cuts the text at the specified length and adds ... at the end. */
  maxLength?: number;

  /** 'body-content' | 'title' */
  type?: Type;

  /** The text to display */
  value: string;

  headingSize?: 1 | 2 | 3 | 4 | 5;
};

const getTextToDisplay = (props: PropTypes) =>
  props.maxLength && props.value.length > props.maxLength
    ? `${props.value.substr(0, props.maxLength)} ...`
    : props.value;

const getTextType = (props: PropTypes) => {
  return props.type === 'heading' ? `h${props.headingSize}` : 'span';
};

const Text: React.FC<PropTypes> = (props: PropTypes) => {
  const { type, wrapperClassName } = props;
  const TextType = getTextType(props);
  const styles = classnames(style[type!], wrapperClassName);

  return React.createElement(
    TextType,
    { className: styles },
    getTextToDisplay(props),
  );
};

Text.defaultProps = {
  headingSize: 1,
  type: 'body-content',
  wrapperClassName: '',
};

export default Text;
