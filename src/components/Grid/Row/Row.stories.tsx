import {storiesOf} from '@storybook/react';
import * as React from 'react';
import Container from "../Container";
import Row from "./index";
import Col from "../Col";

const stories = storiesOf('Grid System|Grid', module);

stories.add(
  'Row',
  () => {
    return <Container>
      <Row style={{border: '1px solid black'}}>
        <Col xs={2} style={{background: '#c5c5c5'}}>Column 1 Row 1</Col>
        <Col xs={2} style={{background: '#c5c5c5'}}>Column 2 Row 1</Col>
      </Row>
      <Row style={{border: '1px solid black'}}>
        <Col xs={2} style={{background: '#c5c5c5'}}>Column 1 Row 2</Col>
        <Col xs={2} style={{background: '#c5c5c5'}}>Column 2 Row 2</Col>
      </Row>
    </Container>
  },
  {
    order: 3,
    title: false,
    info: `
Rows are wrappers for columns. Each column has horizontal padding (called a gutter) for controlling the space between them. 
This padding is then counteracted on the rows with negative margins. This way, all the content in your columns is visually 
aligned down the left side.

Basic usage:

\`\`\`
import { Container, Row } from '@codelitt/ay-design-library';

<Container>
  <Row>...</Row>
  <Row>...</Row>
</Container>
\`\`\`
`
  }
);
