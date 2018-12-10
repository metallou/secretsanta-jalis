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

const fSuccess = function(data) {
  fProgress(1);

  const input = $(`#${STEP}input`);
  const holder = input.parent();
  const value = input.val();

  const elem = `<span class="h2 p-3 bg-success rounded text-white text-uppercase">KCN</span>`;
  holder
    .removeClass('bg-danger')
    .html(elem);

  fSaveSession();

  fNext(STEP);
};
const fError = function(data) {
  fProgress(0);

  const input = $(`#${STEP}input`);
  const holder = input.parent();
  const value = input.val();

  if (value.trim() !== '') {
    holder.addClass('bg-danger');
  }
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

