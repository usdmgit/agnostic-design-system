import * as React from 'react';
import { storiesOf } from '@storybook/react';
import Card from './';
import { action } from '@storybook/addon-actions';
import { select, text, withKnobs } from '@storybook/addon-knobs';
import NewsIcon from '../../assets/images/news.png';
import AgencyIcon from '../../assets/images/agency.svg';
import TenantIcon from '../../assets/images/tenant.svg';
import { Container, Row, Col } from '../Grid';

const stories = storiesOf('Components|Card', module);

stories.addDecorator(withKnobs);

stories.add(
  'Live testing',
  () => {
    const cardTitle = text('Title', 'News');

    const cardType = select(
      'Card type',
      ['general', 'tenant', 'agency'],
      'general',
    );

    const cardDescription = text(
      'Description',
      'Ea qui proident velit cupidatat ut. Ea dolor anim anim id voluptate voluptate incididunt aliqua eu labore.',
    );

    const cardShortcuts = [
      {
        label: text('Shortcut 1 label', 'Shortcut 1'),
        onClick: action('Shortcut 1 button clicked'),
      },
      {
        label: text('Shortcut 2 label', 'Shortcut 2'),
        onClick: action('Shortcut 2 button clicked'),
      },
    ];
    const cardButton = {
      label: text('Button Label', 'Button'),
      onClick: action('Main button clicked'),
    };

    return (
      <Container>
        <Row>
          <Col xs={4} sm={4} md={4} lg={4}>
            <p>Card</p>
            <Card
              image={NewsIcon}
              title={cardTitle}
              description={cardDescription}
              shortcuts={cardShortcuts}
              primaryButton={cardButton}
              type={cardType}
            />
          </Col>
        </Row>
      </Container>
    );
  },
  {
    order: 1,
    info: `
The \`Card\` component is composed by a top image, a title, a description, two shortcut buttons, and an action button.

The component's width is 100%, and it adapts to the width of the element that contains it.

The description text can have a maximum of 150 characters on desktop.  For breakpoints defined for mobile devices (<960 px) the maximum will be 70 characters.

When a user hovers over a card on desktop, the card will highlight and “float” above the page.  Depending on the card type you select, the image background color will be different:

<ul>
    <li>
      General: #C3D6FE
    </li>
    <li>
      Toolkit: #D2EFE5
    </li>
    <li>
      Agency: #FDDBD9
    </li>
</ul>

The default value for the Card type is \`general\`.

Usage instructions:

    import { Card } from '@codelitt/ay-design-library';

    <Card
      image='../images/image.jpg'
      title='Card Title'
      description='Ea qui proident velit cupidatat ut. Ea dolor anim anim id voluptate voluptate incididunt aliqua eu labore.'
      shortcuts=[
        {label: 'Shortcut 1 label', onClick: () => { alert('Hi!')},
        {label: 'Shortcut 2 label', onClick: () => { alert('Hi!')}
      ]
      button={label: 'Button label', onClick: () => { alert('Hi!')}
      type='general' | 'toolkit' | 'leasing'
    />
    `,
  },
);

stories.add(
  'Card',
  () => (
    <Container>
      <Row>
        <Col xs={4} sm={4} md={4} lg={4}>
          <Card
            image={NewsIcon}
            type="general"
            title="General Card"
            description="This is the card description text"
            shortcuts={[
              {
                label: 'Shortcut 1 label',
                onClick: action('Shortcut 1 button clicked'),
              },
              {
                label: 'Shortcut 2 label',
                onClick: action('Shortcut 2 button clicked'),
              },
            ]}
            primaryButton={{
              label: 'Open General Card',
              onClick: action('Open News button clicked')
            }}
          />
        </Col>
        <Col xs={4} sm={4} md={4} lg={4}>
          <Card
            image={TenantIcon}
            type="tenant"
            title="Tenant card with a big title more than one line"
            description="This is the card description text"
            shortcuts={[
              {
                label: 'Shortcut 1 label',
                onClick: action('click')
              },
              {
                label: 'Shortcut 2 label',
                onClick: action('click')
              },
            ]}
            primaryButton={{
              label: 'Open Tenant Card',
              onClick: action('click'),
            }}
          />
        </Col>
        <Col xs={4} sm={4} md={4} lg={4}>
          <Card
            image={AgencyIcon}
            type="agency"
            title="Agency card"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
            shortcuts={[
              {
                label: 'Shortcut 1 label',
                onClick: action('click')
              },
              {
                label: 'Shortcut 2 label',
                onClick: action('click')
              },
            ]}
            primaryButton={{
              label: 'Open Agency Card',
              onClick: action('click'),
            }}
          />
        </Col>
      </Row>
    </Container>
  ),
  {
    order: 2,
  },
);
