(function () {
	'use strict';

	// Greater than validator
	window.ParsleyValidator.addValidator('gt',
			function (value, requirement) {
				return parseFloat(value) > parseFloat($(requirement).val());
			}, 32)
		.addMessage('en', 'gt', 'This value should be greater.');
}());
