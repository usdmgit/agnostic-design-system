import {storiesOf} from '@storybook/react';
import * as React from 'react';
import Container from "../Container";
import Row from "../Row";
import Col from "./index";
import {select, withKnobs} from "@storybook/addon-knobs";

const stories = storiesOf('Grid System|Grid', module);
stories.addDecorator(withKnobs);

stories.add(
  'Col',
  () => {
    const xsColumns = select('XS columns', [1, 2, 3, 4], 4);
    const smColumns = select('SM columns', [1, 2, 3, 4, 5, 6, 7, 8], 8);
    const mdColumns = select('MD columns', [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], 6);
    const lgColumns = select('LG columns', [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], 4);
    const colStyle = {background: '#c5c5c5', border: '1px solid #8c8989'};

    return <Container>
      <Row>
        <Col
          xs={xsColumns}
          sm={smColumns}
          md={mdColumns}
          lg={lgColumns}
          style={colStyle}>Column 1</Col>
        <Col
          xs={xsColumns}
          sm={smColumns}
          md={mdColumns}
          lg={lgColumns}
          style={colStyle}>Column 2</Col>
        <Col
          xs={xsColumns}
          sm={smColumns}
          md={mdColumns}
          lg={lgColumns}
          style={colStyle}>Column 3</Col>
      </Row>
    </Container>
  },
  {
    order: 4,
    title: false,
    info: `
Rows are wrappers for columns, and Containers are wrappers for Rows. So, you need to put each Column inside a Row:

\`\`\`
import { Col, Container, Row } from '@codelitt/ay-design-library';

<Container>
  <Row>
    // A <Col> must live inside a <Row> element
    <Col xs={12}>
      //column content
    </Col>
  </Row>
</Container>
\`\`\`

Examples:

\`\`\`
import { Col, Container, Row } from '@codelitt/ay-design-library';

<Container>
  <Row>
    // This Col starts at 50% wide on mobile and bump up to 33.3% wide on desktop 
    <Col xs={2} lg={4}> ... </Col>
    
    // This Col starts at 100% wide on mobile, 
    // 50% on tablets and bump up to 33.3% wide on desktop 
    <Col xs={4} sm={4} lg={4}> ... </Col>
    
    // This Col starts at 100% wide on mobile, 
    // 50% on tablets, 
    // 33.3% on small desktops 
    // and bump up to 20% wide on desktop
    <Col xs={4} sm={4} md={4} lg={2}> ... </Col>
  </Row>
</Container>
\`\`\`
`
  }
);
