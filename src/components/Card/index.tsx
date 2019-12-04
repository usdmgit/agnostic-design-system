import React, { useLayoutEffect, useState } from 'react';
import classnames from 'classnames';

import style from './Card.module.scss';

import Text from '../Text';
import Button from '../Button';

type ButtonType = {
  label: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

type PropTypes = {
  image: string;
  title: string;
  description: string;
  shortcuts: Array<ButtonType>;
  primaryButton: ButtonType;
  wrapperClassName?: string;
};

const getPxFromRem = (value: string) =>
  parseInt(value.replace('rem', ''), 10) * 16;

const minDesktopScreenSize = getPxFromRem(
  style['view-width-small-desktop-min'],
);
const maxCharactersSmallScreen = 70;
const maxCharactersBigScreen = 150;

const Card: React.FC<PropTypes> = (props: PropTypes) => {
  const [width, setWidth] = useState(window.innerWidth);

  useLayoutEffect(() => {
    const updateWidth = () => setWidth(window.innerWidth);

    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  const renderShortcut = (shortcut: ButtonType, lastItem: boolean) => {
    return (
      <div
        className={classnames(style.shortcut, {
          [`${style['no-border']}`]: lastItem,
        })}
        key={shortcut.label}
      >
        <Button
          iconPosition="left"
          label={shortcut.label}
          type="ghost"
          onClick={shortcut.onClick}
          size="small"
        />
      </div>
    );
  };

  const cardWith =
    width < minDesktopScreenSize
      ? maxCharactersSmallScreen
      : maxCharactersBigScreen;

  return (
    <div
      className={classnames(style['card-container'], props.wrapperClassName)}
    >
      <div className={style['image-container']}>
        <img src={props.image} className={style.image} alt="" />
      </div>
      <div className={style.title}>
        <Text type="title" value={props.title} />
      </div>
      <div className={style.description}>
        <Text value={props.description} maxLength={cardWith} />
      </div>
      {props.shortcuts.map((shortcut, index) =>
        renderShortcut(shortcut, index === props.shortcuts.length - 1),
      )}
      <div className={style['button-container']}>
        <Button
          type="inline"
          label={props.primaryButton.label}
          onClick={props.primaryButton.onClick}
        />
      </div>
    </div>
  );
};

export default Card;
