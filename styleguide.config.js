module.exports = {
  sections: [
    {
      name: 'AY Design Library',
      content: 'docs/STYLEGUIDIST.md'
    },
    {
      name: 'UI Components',
      components: 'src/components/**/*.tsx',
      ignore: ['src/components/TextInput/*.tsx', 'src/components/DateInput/*.tsx', 'src/components/TextareaInput/*.tsx', 'src/components/InputComponent/*.tsx'],
      exampleMode: 'expand', // 'hide' | 'collapse' | 'expand'
      usageMode: 'expand' // 'hide' | 'collapse' | 'expand'
    }
  ]
};
