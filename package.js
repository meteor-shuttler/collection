Package.describe({
  name: 'shuttle:collection',
  version: '0.0.0',
  summary: 'Adds `Collection` helper to all documents in all collections.',
  git: 'https://github.com/meteor-shuttle/collection',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  
  api.use('mongo');
  api.use('ecmascript');
  
  api.use('dburles:collection-helpers@1.0.4');
  api.use('lai:collection-extensions@0.2.1');
  
  api.addFiles('collection.js');
});