var App = Backbone.Router.extend({
	user: null,

	routes: {
		"register":               "onRegister",
		"register/full":          "onRegisterFull",
		"sign-in":                "onSignIn",
		"reset-password":         "onResetPassword",
		"change-password/:token": "onChangePassword",
		"":                       "onIndex"
	},

	initialize: function () {
		this.signin = new SignIn();
		this.register = new Register();
		this.resetPassword = new ResetPassword();
		this.changePassword = new ChangePassword();
		this.download = new Download();
	},

	onIndex: function () {
		if (this.user) {
			this.download.start();
		} else {
			this.navigate("sign-in", {trigger: true});
		}
	},

	onRegister: function () {
		this.register.start(false);
	},

	onRegisterFull: function () {
		this.register.start(true);
	},

	onSignIn: function () {
		this.signin.start();
	},

	onResetPassword: function () {
		this.resetPassword.start();
	},

	onChangePassword: function (token) {
		this.changePassword.start(token);
	}

});

var app = undefined;
$(function () {
	var host = location.hostname;
	var required = 'contestedspace.net';
	if (location.hostname == "localhost") {
		required = 'localhost';
	}
	if (host != required) {
		location.replace(
			'http://'+ required +'/download/' + location.hash
		);
	} else {
		app = new App();
		Backbone.history.start();
	}
});