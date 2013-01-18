({
  appDir: '../js',
  baseUrl: './',
  dir: '../build/js',
  paths: {
        jquery: './lib/jquery-1.8.3.min',
        underscore: './lib/underscore-min',
        backbone: './lib/backbone-min',
        domReady: './lib/domReady',
        text: './lib/text'
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
   modules: [
        {
            name: 'main',
            exclude: ['common']
        },
        {
            name: 'common'
        }
   ],
   keepBuildDir: true
})