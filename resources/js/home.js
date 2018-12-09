require('./steps/step1.js');
require('./steps/step2.js');
require('./steps/step3.js');

$(document).ready(function() {
  $('#start .next')
    .first()
    .on('click', function(e) {
      const id = $(this).data('next');
      $(`#${id}`).removeClass('d-none');
      location.hash = id;
    });

  $('#step1 .next')
    .first()
    .on('click', function(e) {
      const id = $(this).data('next');
      $(`#${id}`).removeClass('d-none');
      location.hash = id;
    });
  $('#step2 .next')
    .first()
    .on('click', function(e) {
      const id = $(this).data('next');
      $(`#${id}`).removeClass('d-none');
      location.hash = id;
    });
  $('#step3 .next')
    .first()
    .on('click', function(e) {
      const id = $(this).data('next');
      $(`#${id}`).removeClass('d-none');
      location.hash = id;
    });


  $('#step1').removeClass('d-none');
  $('#step2').removeClass('d-none');
  $('#step3').removeClass('d-none');
  $('#finish').removeClass('d-none');
});

