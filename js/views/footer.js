define(['common'], function() {
	var Footer = Backbone.View.extend({
		options: {
			rendered: false,
			visible: false
		},
		initialize: function() {
			_.bindAll(this);
		},
		render: function() {
			this.$el.html('<p>Here is the footer</p>');
			this.options.rendered = true;
			return this;
		},
		show: function() {
			if(!this.options.rendered)
				this.render();
			
			this.$el.addClass('show');
			this.options.visible = true;
		},
		hide: function() {
			this.$el.removeClass('show');
			this.options.visible = false;
		}
	});

	return Footer;
});