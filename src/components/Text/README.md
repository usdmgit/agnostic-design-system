Text title example:

```js
  initialState = { textValue: 'This is a title' };
  <Text type='title' value={state.textValue} />
```

Text example with no limits:

```js
  initialState = { textValue: 'Ea qui proident velit cupidatat ut. Ea dolor anim anim id voluptate voluptate incididunt aliqua eu labore.' };
  <Text value={state.textValue} />
```

Text example with 70 characters limit:

```js
  initialState = { textValue: 'Ea qui proident velit cupidatat ut. Ea dolor anim anim id voluptate voluptate incididunt aliqua eu labore.', maxLength: 70 };
  <Text value={state.textValue} maxLength={state.maxLength} />
```