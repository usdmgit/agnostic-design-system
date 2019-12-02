import * as React from 'react';
import {storiesOf} from '@storybook/react';
import Card from './';
import {action} from '@storybook/addon-actions';
import {text, withKnobs} from '@storybook/addon-knobs';
import NewsIcon from '../../assets/images/news.png'
import {Container, Row, Col} from "../Grid";

const stories = storiesOf('Components|Card', module);

stories.addDecorator(withKnobs);

stories.add(
  'Live testing',
  () => {
    const cardTitle = text('Title', 'News');
    const cardDescription = text(
      'Description',
      'Ea qui proident velit cupidatat ut. Ea dolor anim anim id voluptate voluptate incididunt aliqua eu labore.',
    );

    const cardShortcuts = [
      {
        label: text('Shortcut 1 label', 'Shortcut 1'),
        onClick: () => action('button clicked'),
      },
      {
        label: text('Shortcut 2 label', 'Shortcut 2'),
        onClick: () => action('button clicked'),
      },
    ];
    const cardButton = {
      label: text('Button Label', 'Button'),
      onClick: () => action('button clicked'),
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

When a user hovers over a card on desktop, the card will highlight and “float” above the page.

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
            title="News"
            description="This is the card description text"
            shortcuts={[
              {
                label: 'Shortcut 1 label',
                onClick: () => {
                  alert('Hi!');
                },
              },
              {
                label: 'Shortcut 2 label',
                onClick: () => {
                  alert('Hi!');
                },
              },
            ]}
            primaryButton={{
              label: 'Open News',
              onClick: () => {
                alert('Hi!');
              },
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
