Containers provide a means to center and horizontally pad your page’s contents. 
It has a max width depending on the screen size:
 
| Page width                  | Container max-width |
|-----------------------------|---------------------|
| `xs` (< 48rem)              | 100%                |
| `sm` (>= 48rem and < 64rem) | 46rem               |
| `md`(>= 64rem and < 75rem)  | 62rem               |
| `lg` (>= 75rem)             | 74rem               |


Basic usage:

```jsx static
import { Container, Row } from '@codelitt/ay-design-library';

<Container>
  <Row>...</Row>
  <Row>...</Row>
</Container>
```
