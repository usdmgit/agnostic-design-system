module.exports = {
  sections: [
    {
      name: 'Introduction',
      content: 'README.md'
    },
    {
      name: 'Documentation',
      sections: [
        {
          name: 'Installation',
          content: 'INSTALLATION.md'
        }
      ]
    },
    {
      name: 'UI Components',
      components: 'src/components/**/*.tsx',
      exampleMode: 'expand', // 'hide' | 'collapse' | 'expand'
      usageMode: 'expand' // 'hide' | 'collapse' | 'expand'
    }
  ]
};
