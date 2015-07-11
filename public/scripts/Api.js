var Api = {

	serialize: function(form) {
		var values = {};
		_.each(form.elements, function (e) {
			if (e.type != "submit") {
				values[e.name] = e.value;
			}
		});
		return values;
	}

};