requirejs.config({
    //By default load any module IDs from js/lib
    //except, if the module ID starts with "app",
    //load it from the js/app directory. paths
    //config is relative to the baseUrl, and
    //never includes a ".js" extension since
    //the paths config could be for a directory.
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
    }
});



require(['domReady!','common'], function(dom,common){
    alert(dom);
});
