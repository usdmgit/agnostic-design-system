import * as React from 'react';
import { storiesOf } from '@storybook/react';
import Button from './';
import { action } from '@storybook/addon-actions';
import { boolean, select, text, withKnobs } from '@storybook/addon-knobs';

const stories = storiesOf('Components|Button', module);

stories.addDecorator(withKnobs);

stories.add(
  'Live testing',
  () => {
    const buttonLabel = text('Label', 'Click me');
    const buttonSize = select('Button size', ['regular', 'small'], 'regular');
    const buttonIcon = select(
      'Icon Position',
      { left: 'left', right: 'right', 'no icon': null },
      null,
    );
    const buttonDisabled = boolean('Disabled', false);

    return (
      <div>
        <div style={{ padding: '10px', display: 'inline-block' }}>
          <p>Main</p>
          <Button
            type="main"
            label={buttonLabel}
            size={buttonSize}
            iconPosition={buttonIcon}
            disabled={buttonDisabled}
            onClick={action('button clicked')}
          />
        </div>
        <div style={{ padding: '10px', display: 'inline-block' }}>
          <p>Secondary</p>
          <Button
            type="secondary"
            label={buttonLabel}
            size={buttonSize}
            iconPosition={buttonIcon}
            disabled={buttonDisabled}
            onClick={action('button clicked')}
          />
        </div>
        <div style={{ padding: '10px', display: 'inline-block' }}>
          <p>Ghost</p>
          <Button
            type="ghost"
            label={buttonLabel}
            size={buttonSize}
            iconPosition={buttonIcon}
            disabled={buttonDisabled}
            onClick={action('button clicked')}
          />
        </div>
        <div style={{ padding: '10px', display: 'inline-block' }}>
          <p>Contextual</p>
          <Button
            type="contextual"
            label={buttonLabel}
            size={buttonSize}
            iconPosition={buttonIcon}
            disabled={buttonDisabled}
            onClick={action('button clicked')}
          />
        </div>
        <div style={{ padding: '10px', display: 'inline-block' }}>
          <p>Delete</p>
          <Button
            type="delete"
            label={buttonLabel}
            size={buttonSize}
            iconPosition={buttonIcon}
            disabled={buttonDisabled}
            onClick={action('button clicked')}
          />
        </div>
        <div
          style={{ padding: '10px', display: 'inline-block', width: '22rem' }}
        >
          <p>Inline</p>
          <Button
            type="inline"
            label={buttonLabel}
            size={buttonSize}
            iconPosition={buttonIcon}
            disabled={buttonDisabled}
            onClick={action('button clicked')}
          />
        </div>
      </div>
    );
  },
  {
    order: 1,
    info: `
Usage instructions:

    import { Button } from '@codelitt/ay-design-library';

    <Button type="main" label="My label" onClick={() => { alert('Hi!') }} />
    `,
  },
);

stories.add(
  'Main',
  () => (
    <div>
      <div style={{ padding: '10px 0' }}>
        <Button
          type="main"
          label="Main Button"
          onClick={action('main button clicked')}
        />
      </div>

      <div style={{ padding: '10px 0' }}>
        <Button
          type="main"
          label="Main Button Disabled"
          disabled
          onClick={action('main button clicked')}
        />
      </div>

      <div style={{ padding: '10px 0' }}>
        <Button
          type="main"
          label="Main Button"
          iconPosition="left"
          onClick={action('main button clicked')}
        />
      </div>

      <div style={{ padding: '10px 0' }}>
        <Button
          type="main"
          label="Main Button"
          iconPosition="right"
          onClick={action('main button clicked')}
        />
      </div>

      <div style={{ padding: '10px 0' }}>
        <Button
          type="main"
          size="small"
          label="Small CTA"
          onClick={action('main button clicked')}
        />
      </div>

      <div style={{ padding: '10px 0' }}>
        <Button
          type="main"
          size="small"
          label="Small Icon Left"
          iconPosition="left"
          onClick={action('main button clicked')}
        />
      </div>

      <div style={{ padding: '10px 0' }}>
        <Button
          type="main"
          size="small"
          label="Small Icon Right"
          iconPosition="right"
          onClick={action('main button clicked')}
        />
      </div>
    </div>
  ),
  {
    order: 2,
  },
);

stories.add(
  'Secondary',
  () => (
    <div>
      <div style={{ padding: '10px 0' }}>
        <Button type="secondary" label="Secondary Button" />
      </div>

      <div style={{ padding: '10px 0' }}>
        <Button type="secondary" label="Secondary Button Disabled" disabled />
      </div>

      <div style={{ padding: '10px 0' }}>
        <Button type="secondary" label="Idle Icon Left" iconPosition="left" />
      </div>

      <div style={{ padding: '10px 0' }}>
        <Button type="secondary" label="Idle Icon Right" iconPosition="right" />
      </div>

      <div style={{ padding: '10px 0' }}>
        <Button type="secondary" size="small" label="Small CTA" />
      </div>

      <div style={{ padding: '10px 0' }}>
        <Button
          type="secondary"
          size="small"
          label="Small Icon Left"
          iconPosition="left"
        />
      </div>

      <div style={{ padding: '10px 0' }}>
        <Button
          type="secondary"
          size="small"
          label="Small Icon Right"
          iconPosition="right"
        />
      </div>
    </div>
  ),
  {
    order: 3,
  },
);

stories.add(
  'Ghost',
  () => (
    <div>
      <div style={{ padding: '10px 0' }}>
        <Button type="ghost" label="Ghost Button" />
      </div>

      <div style={{ padding: '10px 0' }}>
        <Button type="ghost" label="Ghost Button Disabled" disabled />
      </div>

      <div style={{ padding: '10px 0' }}>
        <Button type="ghost" label="Idle Icon Left" iconPosition="left" />
      </div>

      <div style={{ padding: '10px 0' }}>
        <Button type="ghost" label="Idle Icon Right" iconPosition="right" />
      </div>

      <div style={{ padding: '10px 0' }}>
        <Button type="ghost" size="small" label="Small CTA" />
      </div>

      <div style={{ padding: '10px 0' }}>
        <Button
          type="ghost"
          size="small"
          label="Small Icon Left"
          iconPosition="left"
        />
      </div>

      <div style={{ padding: '10px 0' }}>
        <Button
          type="ghost"
          size="small"
          label="Small Icon Right"
          iconPosition="right"
        />
      </div>
    </div>
  ),
  {
    order: 4,
  },
);

stories.add(
  'Contextual',
  () => (
    <div>
      <div style={{ padding: '10px 0' }}>
        <Button type="contextual" label="Contextual Button" />
      </div>

      <div style={{ padding: '10px 0' }}>
        <Button type="contextual" label="Idle Icon Left" iconPosition="left" />
      </div>

      <div style={{ padding: '10px 0' }}>
        <Button
          type="contextual"
          label="Idle Icon Right"
          iconPosition="right"
        />
      </div>

      <div style={{ padding: '10px 0' }}>
        <Button type="contextual" size="small" label="Small CTA" />
      </div>

      <div style={{ padding: '10px 0' }}>
        <Button
          type="contextual"
          size="small"
          label="Small Icon Left"
          iconPosition="left"
        />
      </div>

      <div style={{ padding: '10px 0' }}>
        <Button
          type="contextual"
          size="small"
          label="Small Icon Right"
          iconPosition="right"
        />
      </div>
    </div>
  ),
  {
    order: 5,
  },
);

stories.add(
  'Delete',
  () => (
    <div>
      <div style={{ padding: '10px 0' }}>
        <Button type="delete" label="Delete Button" />
      </div>

      <div style={{ padding: '10px 0' }}>
        <Button type="delete" label="Idle Icon Left" iconPosition="left" />
      </div>

      <div style={{ padding: '10px 0' }}>
        <Button type="delete" label="Idle Icon Right" iconPosition="right" />
      </div>

      <div style={{ padding: '10px 0' }}>
        <Button type="delete" size="small" label="Small CTA" />
      </div>

      <div style={{ padding: '10px 0' }}>
        <Button
          type="delete"
          size="small"
          label="Small Icon Left"
          iconPosition="left"
        />
      </div>

      <div style={{ padding: '10px 0' }}>
        <Button
          type="delete"
          size="small"
          label="Small Icon Right"
          iconPosition="right"
        />
      </div>
    </div>
  ),
  {
    order: 6,
  },
);

stories.add(
  'Inline',
  () => (
    <div>
      <div style={{ padding: '10px 0', width: '22rem', height: '4rem' }}>
        <Button type="inline" label="Inline Button" />
      </div>

      <div style={{ padding: '10px 0', width: '22rem', height: '4rem' }}>
        <Button type="inline" label="Idle Icon Right" iconPosition="right" />
      </div>
    </div>
  ),
  {
    order: 7,
  },
);
