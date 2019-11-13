# Tests

We are using [jest](https://jestjs.io/) and [react-test-renderer](https://pt-br.reactjs.org/docs/test-renderer.html)
to test the components.

## Adding tests

### Folder structure

For tests we follow the [same folder structure](../src/components/README.md) as when creating a new component. Which means 
that if you have a Button component you need to add a Button folder and so on. The unique difference is that now you'll create 
it under the `tests` folder:
```
tests/components/Button/
tests/components/Button/PrimaryButton/
tests/components/Button/SecondaryButton/
```

### Naming
All filenames must have the same name of the component that you're testing with the `.test.tsx` extension.
Example: 
```
tests/components/Button/Button.test.tsx
```

## Best practices

1. **Always write isolated test cases**  
   The order of execution has to be independent between test cases.

2. **Test only one thing on each test case**  
   If a component has different options to render it, each one should be tested separately.
   Whenever a bug occurs, it will help you locate the source of the problem.
   
   ```javascript
   it('renders the button with an icon at left', () => {
     // expect(...)to(...);
   });
   
   it('renders the button with an icon at right', () => {
     // expect(...)to(...);
   });
   ```
3. **Describe your tests properly**  
   This helps to avoid comments and increases the maintainability. Keep in mind that someone else will read it too. 
   Tests can be the live documentation of the code.

   To help you writing test names properly, you can use the "unit of work - scenario/context - expected behaviour" pattern:

   ```javascript
   describe('[unit of work]', () => {
     describe('when [scenario/context]', () => {
       it('should [expected behaviour]', () => {});
     });
   });
   ```
