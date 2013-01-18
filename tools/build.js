({
  baseUrl: '../js',
  mainConfigFile: '../js/main.js',
  dir: '../build',
  paths: {
        jquery: 'lib/jquery-1.8.3.min',
        underscore: 'lib/underscore-min',
        backbone: 'lib/backbone-min',
        domReady: 'lib/domReady',
        text: 'lib/text'
   },
   shim: {
        backbone: {
            deps: ['underscore','jquery'],
            exports: "Backbone"
        },
        underscore: {
            exports: "_"
        }
    },
   modules: [{
        name: 'main'
   }]
})