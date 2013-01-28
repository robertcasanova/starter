define(['common'], function() {
	var Hp = Backbone.View.extend({
		initialize: function() {
			this.$footer = this.$el.find('footer');
		}
	});

	return Hp;
})