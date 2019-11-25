import * as React from 'react';
import Container from './Container';
import Row from './Row';
import Col from './Col';
import {storiesOf} from "@storybook/react";

const stories = storiesOf('Grid System|Grid', module);

const columnStyle = {background: '#c5c5c5', border: '1px solid #8c8989', fontSize: '14px'};

stories.add(
  'Overview',
  () =>
    <Container>
      <Row>
        <Col xs={4} sm={4} md={3} lg={1} style={columnStyle}>Col 1</Col>
        <Col xs={4} sm={4} md={3} lg={1} style={columnStyle}>Col 2</Col>
        <Col xs={4} sm={4} md={3} lg={1} style={columnStyle}>Col 3</Col>
        <Col xs={4} sm={4} md={3} lg={1} style={columnStyle}>Col 4</Col>
        <Col xs={4} sm={4} md={3} lg={1} style={columnStyle}>Col 5</Col>
        <Col xs={4} sm={4} md={3} lg={1} style={columnStyle}>Col 6</Col>
        <Col xs={4} sm={4} md={3} lg={1} style={columnStyle}>Col 7</Col>
        <Col xs={4} sm={4} md={3} lg={1} style={columnStyle}>Col 8</Col>
        <Col xs={4} sm={4} md={3} lg={1} style={columnStyle}>Col 9</Col>
        <Col xs={4} sm={4} md={3} lg={1} style={columnStyle}>Col 10</Col>
        <Col xs={4} sm={4} md={3} lg={1} style={columnStyle}>Col 11</Col>
        <Col xs={4} sm={4} md={3} lg={1} style={columnStyle}>Col 12</Col>
      </Row>
    </Container>,
  {
    order: 1,
    inline: true,
    info: `
AY’s grid system uses a series of containers, rows, and columns to layout and align content. It’s built with flexbox and 
is fully responsive. Below is an example and an in-depth look at how the grid comes together.

Column classes indicate the number of columns you’d like to use out of the possible 12 per row or less depending on the screen size:
  
* \`lg\`: Large screens (desktops) are divided into 12 columns.
* \`md\`: Medium screens (small desktops) are divided into 12 columns.
* \`sm\`: Small screens (tablets) are divided into 8 columns.
* \`xs\`: Extra small screens (phones) are divided into 4 columns.

Breaking it down, here’s how it works:

* Containers provide a means to center and horizontally pad your page’s contents.
* Rows are wrappers for columns. Each column has horizontal padding (called a gutter) for controlling the space between them. 
This padding is then counteracted on the rows with negative margins. This way, all the content in your columns is visually 
aligned down the left side.
* In a grid layout, content must be placed within columns and only columns may be immediate children of rows.
* Column widths are set in percentages, so they’re always fluid and sized relative to their parent element.
* Columns have horizontal padding to create the gutters between individual columns.
* To make the grid responsive, there are four grid breakpoints, one for each responsive breakpoint: all breakpoints (extra small), small, medium, and large.
* Grid breakpoints are based on minimum width media queries, meaning they apply to that one breakpoint and all those above 
it (e.g., \`<Col sm={4}>\` applies to small, medium, and large devices, but not the first xs breakpoint).

This example creates twelve columns with different widths on small, medium, and large devices using our predefined grid components. 
Those columns are centered in the page with the parent \`<Container/>\`.

* In large screens \`lg\`: each column has 8.33% of width (1 column of 12)
* In medium screens \`md\`: each column has 25% of width (3 columns of 12 )
* In small screens \`sm\`: each column has 50% of width (4 columns of 8)
* In extra-small screens \`xs\`: each column has 100% of width (4 columns of 4)
    `
  }
);
