const STEP = 'node';

const fGetSession = function() {
  const item = appStorage.getItem(STEP);
  let data;

  if (item === null) {
    data = {
      "key1": '',
      "key2": ''
    };
  } else {
    data = JSON.parse(item);
  }

  return data;
};
const fSaveSession = function(data) {
  appStorage.setItem(STEP, JSON.stringify(data));
};
const fLoadSession = function() {
  const data = fGetSession();

  $('#key1').val(data.key1);
  $('#key2').val(data.key2);
}

const fElem = function(text) {
  return `<span class="d-block text-nowrap text-capitalize">${text}</span>`;
};

const fSuccess = function(data) {
  $('#form')
    .removeClass('bg-danger')
    .addClass('bg-success');

  $('#key1').replaceWith(fElem(data.key1));
  $('#key2').replaceWith(fElem(data.key2));
  $('#code').replaceWith(fElem(data.code));

  fSaveSession(data);
  fNext();
};
const fError = function(data) {
  if ((data.key1.length > 0) || (data.key2.length > 0)) {
    $('#form').addClass('bg-danger');
  }
};
const fFailure = function(err) {
  console.error(err);
  alert(`${STEP} Ajax Error`);
};

const fGetData = function() {
  return{
    "data": {
      "glyph": $('#glyph').val(),
      "key1": $('#key1').val(),
      "key2": $('#key2').val(),
    }
  };
};

const fCheck = function(e) {
  jQuery
    .ajax({
      "url": `/${STEP}`,
      "data": fGetData()
    })
    .then(fThen(fSuccess, fError))
    .catch(fFailure);
};
const fNext = function() {
  $('#check')
    .parent()
    .addClass('d-none');
};

$(document).ready(function() {
  fLoadSession();

  $(`#check`)
    .on('click', fCheck)
    .trigger('click');
});
