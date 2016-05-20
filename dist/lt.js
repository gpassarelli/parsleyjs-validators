(function () {
	'use strict';

	// Less than validator
	window.ParsleyValidator.addValidator('lt',
			function (value, requirement) {
				return parseFloat(value) < parseFloat($(requirement).val());
			}, 32)
		.addMessage('en', 'lt', 'This value should be less.');
}());
