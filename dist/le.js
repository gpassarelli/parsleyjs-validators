(function () {
	'use strict';

	// Less than or equal to validator
	window.ParsleyValidator.addValidator('le',
			function (value, requirement) {
				return parseFloat(value) <= parseFloat($(requirement).val());
			}, 32)
		.addMessage('en', 'le', 'This value should be less or equal.');
}());
