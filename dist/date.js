(function () {
  'use strict';

  //
  window.Parsley.addValidator('date',
      function (value) {
        return /^(((0[1-9]|[12]\d|3[01])\/(0[13578]|1[02])\/((19|[2-9]\d)\d{2}))|((0[1-9]|[12]\d|30)\/(0[13456789]|1[012])\/((19|[2-9]\d)\d{2}))|((0[1-9]|1\d|2[0-8])\/02\/((19|[2-9]\d)\d{2}))|(29\/02\/((1[6-9]|[2-9]\d)(0[48]|[2468][048]|[13579][26])|((16|[2468][048]|[3579][26])00))))$/
          .test(value);
      }, 32)
    .addMessage('en', 'date', 'This value must be a valid date');

  //
  window.Parsley.addValidator('between',
    function (value, requirement) {
      var startDate = new Date(value.replace(/(\d{2})\/(\d{2})\/(\d{4})/, '$3-$2-$1')),
          endDate = new Date($(requirement).val().replace(/(\d{2})\/(\d{2})\/(\d{4})/, '$3-$2-$1'));

      if (startDate < endDate) {
        return false;
      }

      return true;
    }, 32);
}());
