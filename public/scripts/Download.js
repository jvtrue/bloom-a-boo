var Download = Backbone.View.extend({
	template: new Template("download"),

	initialize: function () {
		this.setElement($('#account'));
	},

	start: function () {
		this.render();
	},

	render: function () {
		this.template.title("Download");
		// this.$el.html(this.template.render(app.user));
		this.$el.html(this.template.render({fullAccess: true}));
	}

});