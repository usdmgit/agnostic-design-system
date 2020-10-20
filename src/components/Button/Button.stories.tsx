import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, withKnobs } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import Button from '@/components/Button';

const stories = storiesOf('Components/Button', module);

stories.addDecorator(withKnobs);

stories.add('With text', () => {
  const title = text('Title', 'Click me');
  const wrapperClassName = text('Wrapper class name', '');
  return (
    <Button onClick={action('button-click')} title={title} wrapperClassName={wrapperClassName} />
  );
});
