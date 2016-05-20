(function () {
	'use strict';

	// Greater than or equal to validator
	window.ParsleyValidator.addValidator('ge',
			function (value, requirement) {
				return parseFloat(value) >= parseFloat($(requirement).val());
			}, 32)
		.addMessage('en', 'ge', 'This value should be greater or equal.');
}());
