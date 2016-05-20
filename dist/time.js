(function () {
	'use strict';

	// Check if the time is HH:MM
	window.ParsleyValidator.addValidator('time',
			function (value) {
				var time = value,
            regex = /^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/;

				if (time.match(regex)) {
					return true;
				} else {
					return false;
				}
			}, 32)
		.addMessage('en', 'time', 'This value should be a valid time.');
}());
