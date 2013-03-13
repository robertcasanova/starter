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


require(['domReady!','common','views/hp','views/footer'], function(dom,com,ViewHp) {

    var Homepage = Backbone.Router.extend({
        routes: {
            'footer' : 'loadFooter',
            '*actions': 'defaultAction'
            
        },
        initialize: function() {
            _.bindAll(this);

            this.mainView = new ViewHp({el: '.page#hp'});
        },
        loadFooter: function() {
            var self = this;
            require(['views/footer'], function(Footer) {
                self.mainView.footer = new Footer({el: self.mainView.$el.find('footer')});
                self.mainView.footer.show();
            });
        },
        defaultAction: function() {

            if (this.mainView.footer && this.mainView.footer.options.visible )
                this.mainView.footer.hide();
        }
    });

    new Homepage();
    Backbone.history.start();

});