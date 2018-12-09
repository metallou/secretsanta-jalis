window.fillProgress = function(id, nbCurrent, nbTotal) {
  const jQelem = $(`#${id} .progress`).first();
  let percent = Math.floor(100*nbCurrent/nbTotal);

  if (nbCurrent === nbTotal) {
    percent = 100;
    jQelem
      .removeClass('bg-primary')
      .addClass('bg-success');
  }

  jQelem.css('width', `${percent}%`);
};

window.fNext = function(step) {
  $(`#${step} .check`)
    .first()
    .addClass('d-none');
  $(`#${step} .next`)
    .first()
    .removeClass('d-none');
};

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

