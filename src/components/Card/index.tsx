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
  description: string;
  image: string;
  primaryButton: ButtonType;
  shortcuts: Array<ButtonType>;
  title: string;
  type?: 'general' | 'tenant' | 'agency';
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
  const {
    description,
    image,
    primaryButton,
    shortcuts,
    title,
    type,
    wrapperClassName,
  } = props;
  const [width, setWidth] = useState(window.innerWidth);

  useLayoutEffect(() => {
    const updateWidth = () => setWidth(window.innerWidth);

    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  const renderShortcut = (
    shortcut: ButtonType,
    index: number,
    isLastItem: boolean,
  ) => {
    return (
      <div
        className={classnames(style.shortcut, {
          [`${style['no-border']}`]: isLastItem,
        })}
        key={`${index}-${shortcut.label}`}
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
    <div className={classnames(style['card-container'], wrapperClassName)}>
      <div>
        <div className={classnames(style['image-container'], style[type!])}>
          <img src={image} className={style.image} alt="card-icon " />
        </div>

        <div className={style.title}>
          <Text
            type="title"
            value={title}
            wrapperClassName={style['card-title']}
          />
        </div>
        <div className={style.description}>
          <Text
            value={description}
            maxLength={cardWith}
            wrapperClassName={style['card-description']}
          />
        </div>
      </div>

      <div>
        {shortcuts.map((shortcut, index) =>
          renderShortcut(shortcut, index, index === shortcuts.length - 1),
        )}
        <div className={style['button-container']}>
          <Button
            type="inline"
            label={primaryButton.label}
            onClick={primaryButton.onClick}
            wrapperClassName={style['primary-button']}
          />
        </div>
      </div>
    </div>
  );
};

Card.defaultProps = {
  type: 'general',
};
export default Card;
