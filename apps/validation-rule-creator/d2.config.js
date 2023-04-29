const config = {
  id: 'ASDF1234', // This must match the AppHub ID to successfully publish
  name: 'simple-app',
  title: 'Simple Example App',
  description: 'This is a simple example application',
  version: '1.0.0',

  // standalone: true, // Don't bake-in a DHIS2 base URL, allow the user to choose

  entryPoints: {
    app: './src/app/app.tsx',
  },

  dataStoreNamespace: 'testapp-namespace',
  customAuthorities: ['testapp-authority'],

  minDHIS2Version: '2.35',
};

module.exports = config;
