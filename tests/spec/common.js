define(['backbone','domReady','text'], function(Backbone){
	describe("Common module",function(){
		it("Should load jQuery", function() {
			expect(jQuery).toBeDefined();
		});
		it("Should load Underscore", function() {
			expect(_).toBeDefined();
		});
		it("Should load Backbone", function() {
			expect(Backbone).toBeDefined();
		});

	})
});