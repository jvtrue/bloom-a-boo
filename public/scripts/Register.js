var Register = Backbone.View.extend({
	template: new Template("register"),

	events: {
		"submit #register-form": "submit"
	},

	initialize: function () {
		this.user = new Backbone.Model();
		this.user.url = '/api/auth/register';
		this.user.on("error", this.onError, this);
		this.user.on("sync", this.onSync, this);
		this.setElement($('#account'));
	},

	start: function (full) {
		if (full) {
			this.user.set("fullAccess", true);
		}
		this.render();
		return this;
	},

	render: function () {
		this.template.title("Register");
		var attr = _.clone(this.user.attributes);
		attr.invalid = this.user.validationError;
		this.$el.html(this.template.render(attr));
		return this;
	},

	submit: function (event) {
		event.preventDefault();
		this.user.set(Api.serialize(event.target));
		this.user.save();
	},

	onError: function (user, resp, options) {
		if (resp.status == 400) {
			this.user.validationError = resp.responseJSON.fields;
			this.render();
		} else {
			alert("Unexpected error");
		}
	},

	onSync: function (user, resp, options) {
		app.user = user.attributes;
		app.navigate("", {trigger: true});
	}

});