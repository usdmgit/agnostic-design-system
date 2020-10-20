import React from 'react';

import '@/components/Button/Button.css';

interface Props {
  title?: string;
  wrapperClassName?: string;
  onClick: () => void;
}

const Button: React.FC<Props> = props => {

  return (
    <button
      onClick={props.onClick}
      title={props.title}
      type='button'
      className="button"
    >
      {props.title}
    </button>
  );
};

export default Button;
