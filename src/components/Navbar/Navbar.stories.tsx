import * as React from 'react';
import Navbar from '.';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import Button from '../Button';
import Input from '../Input';
import LogoImg from '../../assets/images/logo-avant.svg';
import Search from '../../assets/images/search.svg';

const stories = storiesOf('Components|Navbar', module);

stories.addDecorator(withKnobs);
const leftItems = [];
leftItems.push(<img src={LogoImg} />);
leftItems.push(
  <Input
    type="text"
    name={'searchNavbar'}
    placeholder={'Type here'}
    onChange={action(`New Search Value`)}
    icon={Search}
    iconAlt={'Search'}
    iconPosition={'left'}
  />,
);

const rightItems = [];
rightItems.push(
  <Button
    type={'ghost'}
    label={'Activity'}
    size={'regular'}
    onClick={action('Activity clicked')}
  />,
);
rightItems.push(
  <Button
    type={'ghost'}
    label={'Properties'}
    size={'regular'}
    onClick={action('Properties clicked')}
  />,
);
rightItems.push(
  <Button
    type={'ghost'}
    label={'Settings'}
    size={'regular'}
    onClick={action('Settings clicked')}
  >
    <img src={Search} alt={'Avatar'} />
  </Button>,
);
rightItems.push(
  <Button
    type={'main'}
    label={'Create'}
    size={'small'}
    onClick={action('Create clicked')}
  />,
);

stories.add(
  'Live testing',
  () => <Navbar leftItems={leftItems} rightItems={rightItems} />,
  {
    order: 1,
  },
);
