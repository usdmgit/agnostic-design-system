Rows are wrappers for columns, and Containers are wrappers for Rows. So, you need to put each Column inside a Row:

```jsx static
import { Col, Container, Row } from '@codelitt/ay-design-library';

<Container>
  <Row>
    // A <Col> must live inside a <Row> element
    <Col xs={12}>
      //column content
    </Col>
  </Row>
</Container>
```

Examples:

```jsx static
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
```
