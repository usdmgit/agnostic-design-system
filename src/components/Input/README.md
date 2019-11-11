Input example:

```js
<div style={{padding: '10px 0'}}>
  <Input
    name="text_input_1"
    placeholder="Enter your text"
    value="This is a text value..."
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
    value="This is a text value..."
  />
</div>
```

Date Input example:

```js
<div style={{padding: '10px 0'}}>
  <Input
    label="This is a nice label"
    name="date_input_1"
    placeholder="YYYY/MM/DD"
    type="date"
    value="2019-01-01"
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
    value="2019-01-01"
  />
</div>

<div style={{padding: '10px 0'}}>
  <Input
    label="This is a nice label"
    name="date_input_2"
    placeholder="YYYY/MM/DD"
    status="error"
    statusText="This is an invalid value"
    type="date"
    value="No Date"
  />
</div>
```

Textarea Input example:

```js
<div style={{padding: '10px 0'}}>
  <Input
    label="Textarea Input Label"
    name="textarea_input"
    placeholder="Enter some text here..."
    type="textarea"
    value="This is the start of a long text..."
  />
</div>

<div style={{padding: '10px 0'}}>
  <Input
    label="Textarea Input Label"
    name="textarea_input"
    placeholder="Enter some text here..."
    status="success"
    statusText="This is a success message"
    type="textarea"
    value="This is the start of a long text..."
  />
</div>

<div style={{padding: '10px 0'}}>
  <Input
    label="Textarea Input Label"
    name="textarea_input"
    placeholder="Enter some text here..."
    status="error"
    statusText="This is an invalid value"
    type="textarea"
    value="This is the start of a long text..."
  />
</div>
```
