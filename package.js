Package.describe({
  name: '3stack:jsts',
  version: "0.16.0",
  summary: "https://github.com/bjornharrtell/jsts/",
  git: 'https://github.com/3stack-software/meteor-jsts',
  documentation: 'README.md'
});

Npm.depends({
  "jsts": "0.16.0"
});

Package.onUse(function (api) {
  api.export('jsts');
  api.use('cosmos:browserify@0.4.0');
  api.addFiles([
    'jsts.browserify.js'
  ]);
});
