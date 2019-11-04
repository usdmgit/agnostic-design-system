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
          name: 'Getting started',
          content: 'docs/GETTING_STARTED.md'
        },
        {
          name: 'Scripts',
          content: 'docs/SCRIPTS.md'
        },
        {
          name: 'Installation',
          content: 'docs/INSTALLATION.md'
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
