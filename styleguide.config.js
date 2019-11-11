module.exports = {
  sections: [
    {
      name: 'AY Design Library',
      content: 'docs/STYLEGUIDIST.md'
    },
    {
      name: 'UI Components',
      components: 'src/components/*/index.tsx',
      exampleMode: 'expand', // 'hide' | 'collapse' | 'expand'
      usageMode: 'expand' // 'hide' | 'collapse' | 'expand'
    }
  ]
};
