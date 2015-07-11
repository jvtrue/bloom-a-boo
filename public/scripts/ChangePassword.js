var ChangePassword = Backbone.View.extend({
	template: new Template("change-password"),

	events: {
		"submit #change-password-form": "submit"
	},

	initialize: function () {
		this.change = new Backbone.Model();
		this.change.urlRoot = '/api/auth/change-password';
		this.change.on("error", this.onError, this);
		this.change.on("sync", this.onSync, this);
		this.setElement($('#account'));
	},

	start: function (token) {
		this.change.set("id", token);
		this.change.fetch();
		return this;
	},

	render: function () {
		this.template.title("Change Password");
		var attr = _.clone(this.change.attributes);
		attr.invalid = this.change.validationError;
		this.$el.html(this.template.render(attr));
		return this;
	},

	submit: function (event) {
		event.preventDefault();
		this.change.set(Api.serialize(event.target));
		this.change.save();
	},

	onError: function (change, resp, options) {
		if (resp.status == 400) {
			this.change.validationError = resp.responseJSON.fields;
			this.render();
		} else {
			alert("Unexpected error");
		}
	},

	onSync: function (change, resp, options) {
		if (change.has("name")) {
			app.user = change.attributes;
			app.navigate("", {trigger: true});
		} else {
			this.render();
		}
	}

});