define(['common','views/hp'], function(common, Hp) {
	describe("View HomePage", function() {

		setFixtures('<div class="hp" id="page"></div>');
		
		var hp = new Hp();

		it("Should exist",function() {
			expect(hp).toBeDefined();
		});
		
		it("Should be binded to element #page.hp ", function(){
			expect(hp.$el).toBe('#page.hp');
		});
		
		
	});
})