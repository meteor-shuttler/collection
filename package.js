Package.describe({
  name: 'shuttler:collection',
  version: '0.0.6',
  summary: 'Adds `Collection` helper to all documents in all collections.',
  git: 'https://github.com/meteor-shuttler/collection',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  
  api.use('mongo');
  api.use('ecmascript');
  
  api.use('dburles:collection-helpers@1.0.4');
  api.use('lai:collection-extensions@0.2.1');
  api.use('shuttler:namespace@0.0.0');
  api.use('stevezhu:lodash@4.13.1');
  
  api.addFiles('collection.js');
  
  api.export('Shuttler');
});