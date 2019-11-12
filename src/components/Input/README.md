Input example:

```js
initialState = { textValue: '' };
onTextChange = (newValue) => setState({ textValue: newValue });

<div>
  <div style={{padding: '10px 0'}}>
    <Input
      name="text_input_1"
      placeholder="Enter your text"
      value={state.textValue}
      onChange={onTextChange}
    />
  </div>
  
  <div style={{padding: '10px 0'}}>
    <Input
      label="This is a nice label"
      name="text_input_2"
      placeholder="Enter your text"
      status="success"
      statusText="This is a success message"
      type="text"
      value={state.textValue}
      onChange={onTextChange}
    />    
  </div>
    
  <div style={{padding: '10px 0'}}>
    <Input
      label="This is a nice label"
      name="text_input_3"
      placeholder="Enter your text"
      status="error"
      statusText="This is an invalid value"
      type="text"
      value={state.textValue}
      onChange={onTextChange}
    />
  </div>
</div>
```

Date Input example:

```js
initialState = { dateValue: '' };
onDateChange = (newValue) => setState({ dateValue: newValue });

<div>
  <div style={{padding: '10px 0'}}>
    <Input
      label="This is a nice label"
      name="date_input_1"
      placeholder="YYYY/MM/DD"
      type="date"
      value={state.dateValue}
      onChange={onDateChange}
    />
  </div>
    
  <div style={{padding: '10px 0'}}>
    <Input
      label="This is a nice label"
      name="date_input_2"
      placeholder="YYYY/MM/DD"
      status="success"
      statusText="This is a success message"
      type="date"
      value={state.dateValue}
      onChange={onDateChange}
    />
  </div>
  
  <div style={{padding: '10px 0'}}>
    <Input
      label="This is a nice label"
      name="date_input_3"
      placeholder="YYYY/MM/DD"
      status="error"
      statusText="This is an invalid value"
      type="date"
      value={state.dateValue}
      onChange={onDateChange}
    />
  </div>
</div>
```

Textarea Input example:

```js
initialState = { textAreaValue: '' };
onTextAreaChange = (newValue) => setState({ textAreaValue: newValue });

<div>
  <div style={{padding: '10px 0'}}>
    <Input
      label="Textarea Input Label"
      name="textarea_input"
      placeholder="Enter some text here..."
      type="textarea"
      value={state.textAreaValue}
      onChange={onTextAreaChange}
    />
  </div>
  
  <div style={{padding: '10px 0'}}>
    <Input
      label="Textarea Input Label"
      name="textarea_input_2"
      placeholder="Enter some text here..."
      status="success"
      statusText="This is a success message"
      type="textarea"
      value={state.textAreaValue}
      onChange={onTextAreaChange}
    />
  </div>
  
  <div style={{padding: '10px 0'}}>
    <Input
      label="Textarea Input Label"
      name="textarea_input_3"
      placeholder="Enter some text here..."
      status="error"
      statusText="This is an invalid value"
      type="textarea"
      value={state.textAreaValue}
      onChange={onTextAreaChange}
    />
  </div>
</div>
```
