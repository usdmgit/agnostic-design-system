// When some property is optional, react-docgen-typescript adds an "undefined" option to the docs.
// This custom propsParser removes these unnecessary "undefined".
const propsParser = (filePath, source, resolver, handlers) => {
  const result = require('react-docgen-typescript').withCustomConfig(
    './tsconfig.json',
    {
      propFilter: {},
    },
  ).parse(filePath, source, resolver, handlers);

  return result.map(component => {
    const { props } = component;
    const mappedProps = Object.values(props).reduce((previous, prop) => {
      const { name } = prop;
      return {
        ...previous,
        [name]: {
          ...prop,
          type: {
            name: prop.type.name.replace('| undefined', ''),
          },
        },
      };
    }, {});

    return {
      ...component,
      props: mappedProps,
    };
  });
};

module.exports = {
  propsParser,
  sections: [
    {
      name: 'Components',
      components: 'src/components/*/index.tsx',
      exampleMode: 'collapse', // 'hide' | 'collapse' | 'expand'
      usageMode: 'expand' // 'hide' | 'collapse' | 'expand'
    }
  ]
};
