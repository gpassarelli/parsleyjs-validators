(function () {
  'use strict';

  // Validate xml extension.
  window.ParsleyValidator.addValidator('filetype',
      function (value, requirement) {
        var ext = value.split('.').pop().toLowerCase();

        return ext === requirement;
      }, 32)
    .addMessage('en', 'filetype', 'The selected file must be an %s file.');
}());
