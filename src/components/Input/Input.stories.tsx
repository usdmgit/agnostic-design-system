import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import Input from './index';
import { action } from '@storybook/addon-actions';
import { select, text, withKnobs } from '@storybook/addon-knobs';

const stories = storiesOf('Components|Input', module);

stories.addDecorator(withKnobs);

export default {
  title: 'Input',
  component: Input,
};

const InputWrapper = ({ children }) => {
  const [state, setState] = useState({ inputValue: '' });
  return children(state, setState);
};

stories.add(
  'Live testing',
  () => {
    const inputLabel = text('Label', 'Input label');
    const inputId = text('Input id', 'input_id');
    const inputName = text('Input name', 'input_name');
    const inputValue = text('Input value', '');
    const inputPlaceholder = text('Placeholder', '');
    const inputStatusText = text('Status Text', '');
    const inputStatus = select(
      'Input Status',
      { success: 'success', error: 'error', clear: null },
      null,
    );
    const inputIcon = select(
      'Icon Position',
      { left: 'left', right: 'right', 'no icon': null },
      null,
    );

    return (
      <div>
        <div style={{ padding: '10px 0' }}>
          <p>Text Input</p>
          <Input
            type="text"
            id={inputId}
            label={inputLabel}
            status={inputStatus}
            statusText={inputStatusText}
            iconPosition={inputIcon}
            value={inputValue}
            name={inputName}
            placeholder={inputPlaceholder}
            onChange={newValue => action(`New Text Value: ${newValue}`)}
          />
        </div>
        <div style={{ padding: '10px 0' }}>
          <p>Date Input</p>
          <Input
            type="date"
            id={inputId}
            label={inputLabel}
            status={inputStatus}
            statusText={inputStatusText}
            iconPosition={inputIcon}
            value={inputValue}
            name={inputName}
            placeholder={inputPlaceholder}
            onChange={newValue => action(`New Date Value: ${newValue}`)}
          />
        </div>
        <div style={{ padding: '10px 0' }}>
          <p>Textarea Input</p>
          <Input
            type="textarea"
            id={inputId}
            label={inputLabel}
            status={inputStatus}
            statusText={inputStatusText}
            iconPosition={inputIcon}
            value={inputValue}
            name={inputName}
            placeholder={inputPlaceholder}
            onChange={newValue => action(`New Textarea Value: ${newValue}`)}
          />
        </div>
        <div style={{ padding: '10px 0' }}>
          <p>Password Input</p>
          <Input
            type="password"
            id={inputId}
            label={inputLabel}
            status={inputStatus}
            statusText={inputStatusText}
            iconPosition={inputIcon}
            value={inputValue}
            name={inputName}
            placeholder={inputPlaceholder}
            onChange={newValue => action(`New Password Value: ${newValue}`)}
          />
        </div>
      </div>
    );
  },
  {
    order: 1,
  },
);

stories.add(
  'Text',
  () => {
    return (
      <InputWrapper>
        {(state, setState) => (
          <div>
            <div style={{ padding: '10px 0' }}>
              <Input
                name="text_input_1"
                placeholder="Enter your text"
                value={state.inputValue}
                onChange={newValue => setState({ inputValue: newValue })}
              />
            </div>

            <div style={{ padding: '10px 0' }}>
              <Input
                label="This is a nice label"
                name="text_input_2"
                placeholder="Enter your text"
                status="success"
                statusText="This is a success message"
                type="text"
                value={state.inputValue}
                onChange={newValue => setState({ inputValue: newValue })}
              />
            </div>

            <div style={{ padding: '10px 0' }}>
              <Input
                label="This is a nice label"
                name="text_input_3"
                placeholder="Enter your text"
                status="error"
                statusText="This is an invalid value"
                type="text"
                value={state.inputValue}
                onChange={newValue => setState({ inputValue: newValue })}
              />
            </div>
          </div>
        )}
      </InputWrapper>
    );
  },
  {
    order: 2,
  },
);

stories.add(
  'Date',
  () => {
    return (
      <InputWrapper>
        {(state, setState) => (
          <div>
            <div style={{ padding: '10px 0' }}>
              <Input
                label="This is a nice label"
                name="date_input_1"
                placeholder="YYYY/MM/DD"
                type="date"
                value={state.inputValue}
                onChange={newValue => setState({ inputValue: newValue })}
              />
            </div>

            <div style={{ padding: '10px 0' }}>
              <Input
                label="This is a nice label"
                name="date_input_2"
                placeholder="YYYY/MM/DD"
                status="success"
                statusText="This is a success message"
                type="date"
                value={state.inputValue}
                onChange={newValue => setState({ inputValue: newValue })}
              />
            </div>

            <div style={{ padding: '10px 0' }}>
              <Input
                label="This is a nice label"
                name="date_input_3"
                placeholder="YYYY/MM/DD"
                status="error"
                statusText="This is an invalid value"
                type="date"
                value={state.inputValue}
                onChange={newValue => setState({ inputValue: newValue })}
              />
            </div>
          </div>
        )}
      </InputWrapper>
    );
  },
  {
    order: 3,
  },
);

stories.add(
  'Textarea',
  () => {
    return (
      <InputWrapper>
        {(state, setState) => (
          <div>
            <div style={{ padding: '10px 0' }}>
              <Input
                label="Textarea Input Label"
                name="textarea_input"
                placeholder="Enter some text here..."
                type="textarea"
                value={state.inputValue}
                onChange={newValue => setState({ inputValue: newValue })}
              />
            </div>

            <div style={{ padding: '10px 0' }}>
              <Input
                label="Textarea Input Label"
                name="textarea_input_2"
                placeholder="Enter some text here..."
                status="success"
                statusText="This is a success message"
                type="textarea"
                value={state.inputValue}
                onChange={newValue => setState({ inputValue: newValue })}
              />
            </div>

            <div style={{ padding: '10px 0' }}>
              <Input
                label="Textarea Input Label"
                name="textarea_input_3"
                placeholder="Enter some text here..."
                status="error"
                statusText="This is an invalid value"
                type="textarea"
                value={state.inputValue}
                onChange={newValue => setState({ inputValue: newValue })}
              />
            </div>
          </div>
        )}
      </InputWrapper>
    );
  },
  {
    order: 4,
  },
);

stories.add(
  'Password',
  () => {
    return (
      <InputWrapper>
        {(state, setState) => (
          <div>
            <div style={{ padding: '10px 0' }}>
              <Input
                id="password_input_id"
                label="Password Input Label"
                name="password_input"
                placeholder="Enter your password"
                type="password"
                statusText="This is an invalid value"
                value={state.inputValue}
                onChange={newValue => setState({ inputValue: newValue })}
              />
            </div>

            <div style={{ padding: '10px 0' }}>
              <Input
                id="password_input_id_success"
                label="Password Input Label"
                name="password_input_success"
                placeholder="Enter your password"
                type="password"
                status="success"
                statusText="This is a success value"
                value={state.inputValue}
                onChange={newValue => setState({ inputValue: newValue })}
              />
            </div>

            <div style={{ padding: '10px 0' }}>
              <Input
                id="password_input_id_error"
                label="Password Input Label"
                name="password_input_error"
                placeholder="Enter your password"
                type="password"
                status="error"
                statusText="This is an invalid value"
                value={state.inputValue}
                onChange={newValue => setState({ inputValue: newValue })}
              />
            </div>
          </div>
        )}
      </InputWrapper>
    );
  },
  {
    order: 5,
  },
);
