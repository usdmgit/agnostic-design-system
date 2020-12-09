import React from 'react';
import { Meta } from '@storybook/react';
import Input from '@/components/Input';

export default {
  title: 'Input',
  component: Input
} as Meta;

const Template = args => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 'large',
  placeholder: 'Enter text'
};

export const Positive = Template.bind({});
Positive.args = {
  size: 'large',
  state: 'valid',
  placeholder: 'Enter Text'
};

export const Negative = Template.bind({});
Negative.args = {
  size: 'large',
  state: 'invalid',
  placeholder: 'Enter Text'
};

export const DefaultWithLabel = Template.bind({});
DefaultWithLabel.args = {
  size: 'large',
  placeholder: 'Enter text',
  label: 'Input Label',
  id: 'input-id'
};

export const PositiveWithLabel = Template.bind({});
PositiveWithLabel.args = {
  size: 'large',
  state: 'valid',
  placeholder: 'Enter Text',
  label: 'Input Label',
  id: 'input-id'
};

export const NegativeWithLabel = Template.bind({});
NegativeWithLabel.args = {
  size: 'large',
  state: 'invalid',
  placeholder: 'Enter Text',
  label: 'Input Label',
  id: 'input-id'
};