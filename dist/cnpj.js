(function () {
	'use strict';

	//
	window.Parsley.addValidator('cnpj',
			function (value) {
				var b = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2],
					c = value.replace(/[^\d]/g, ''),
					r = /^(0{14}|1{14}|2{14}|3{14}|4{14}|5{14}|6{14}|7{14}|8{14}|9{14})$/;

				if (!c || c.length !== 14 || r.test(c)) {
					return false;
				}

				c = c.split('');

				for (var i = 0, n = 0; i < 12; i++) {
					n += c[i] * b[i + 1];
				}

				n = 11 - n % 11;
				n = n >= 10 ? 0 : n;

				if (parseInt(c[12]) !== n) {
					return false;
				}

				for (i = 0, n = 0; i <= 12; i++) {
					n += c[i] * b[i];
				}

				n = 11 - n % 11;
				n = n >= 10 ? 0 : n;

				if (parseInt(c[13]) !== n) {
					return false;
				}

				return true;
			}, 32)
		.addMessage('en', 'cnpj', 'This value should be a valid CNPJ code');
}());
