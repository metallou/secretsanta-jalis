const nbTotal = 1;
let nbCurrent = 0;
const STEP = 'step3';

const fGetSession = function() {
  const data = appStorage.getItem(STEP) || '';

  return data;
};
const fSaveSession = function(data) {
  appStorage.setItem(STEP, 'KCN');
};
const fLoadSession = function() {
  $(`#${STEP}input`).val(fGetSession());
};

const fProgress = function(nb) {
  nbCurrent += nb;

  fillProgress(STEP, nbCurrent, nbTotal);
};

const fResult = function(success) {
  const input = $(`#${STEP}input`);
  const holder = input.parent();
  const value = input.val();

  fProgress(success ? 1 : 0);
  if (success) {
    const elem = `<span class="h2 p-3 bg-success rounded text-white">KCN</span>`;
    holder
      .removeClass('bg-danger')
      .html(elem);

    appStorage.setItem(STEP, 'KCN');
  } else {
    if (value.trim() !== '') {
      holder.addClass('bg-danger');
    }
  }
};

const fSuccess = function(data) {
  fResult(data);
  fNext(STEP);
};
const fError = function(data) {
  fResult(data);
};
const fFailure = function(err) {
  console.error(err);
  alert(`${STEP} Ajax Error`);
};

const fGetData = function() {
  return{
    "data": $(`#${STEP}input`).val()
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

$(document).ready(function() {
  fLoadSession();

  $(`#${STEP} .check`)
    .first()
    .on('click', fCheck)
    .trigger('click');

  $(`#${STEP}list`)
    .sortable({
      "axis": 'y',
      "containment": 'parent',
    });
});

