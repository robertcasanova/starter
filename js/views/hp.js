define(['common'], function() {
	var Hp = Backbone.View.extend({
		el: '#page.hp',
		initialize: function() {
			alert("Init HP");
		}
	});

	return Hp;
})