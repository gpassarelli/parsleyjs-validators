(function () {
	'use strict';

	// Check if value is a valid hex color
	window.ParsleyValidator.addValidator('hexcolor',
			function (value) {
				var hexcolor = value,
					regex = /^(#){1}([a-fA-F0-9]){6}$/;

				return hexcolor.match(regex) ? true : false;
			}, 32)
		.addMessage('en', 'hexcolor', 'This value should be a valid hex color code.');
}());
