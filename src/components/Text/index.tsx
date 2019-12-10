import * as React from 'react';
import classnames from 'classnames';

import style from './Text.module.scss';

export type Type =
  | 'body-content-big'
  | 'body-content'
  | 'caption'
  | 'heading'
  | 'label-button'
  | 'label-cta'
  | 'label-link'
  | 'title';

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

  /** Adds bold styling to the text.  Only works for body-content and caption */
  isBold?: boolean;

  /** Applies a small font size to the text.  Only works for label-button */
  isSmall?: boolean;
};

const getTextToDisplay = (props: PropTypes) =>
  props.maxLength && props.value.length > props.maxLength
    ? `${props.value.substr(0, props.maxLength)} ...`
    : props.value;

const getTextType = (props: PropTypes) => {
  return props.type === 'heading' ? `h${props.headingSize}` : 'span';
};

const Text: React.FC<PropTypes> = (props: PropTypes) => {
  const { isBold, isSmall, type, wrapperClassName } = props;
  const TextType = getTextType(props);
  const styles = classnames(
    style[type!],
    { [style.bold]: isBold },
    { [style.small]: isSmall },
    wrapperClassName,
  );

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
