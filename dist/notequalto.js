(function () {
	'use strict';

	//  Not equal to validator
	window.ParsleyValidator.addValidator('notequalto',
			function (value, requirement) {
				return value !== $(requirement).val();
			}, 32)
		.addMessage('en', 'notequalto', 'This value should not be the same.');
}());
