let nbTotal;
let nbCurrent = 0;
const STEP = 'step1';

const fGetSession = function() {
  const data = appStorage.getItem(STEP) || JSON.stringify([]);

  return JSON.parse(data);
};
const fSaveSession = function(data) {
  const datas = fGetSession();
  datas.push(...data);

  appStorage.setItem(STEP, JSON.stringify(datas));
};
const fLoadSession = function() {
  fGetSession().forEach(function(elem, index, array) {
      $(`.${STEP}row[data-glyph="${elem.glyph}"]`)
        .find('.form-control')
        .first()
        .val(elem.code);
  });
};

const fProgress = function(nb) {
  nbCurrent += nb;

  fillProgress(STEP, nbCurrent, nbTotal);
};

const fResult = function(data) {
  const fFilter = function(data) {
    return data.success;
  };
  const fReduce = function(carry, data) {
    return carry + (data.success);
  };

  data.forEach(function(elem, index, array) {
    const glyph = elem.glyph;
    const row = $(`.${STEP}row[data-glyph="${glyph}"]`);

    if (elem.success) {
      row
        .removeClass(`${STEP}row`)
        .removeClass('bg-danger')
        .addClass('bg-success');
      row
        .find('[data-field="code"]')
        .first()
        .html(elem.code);
      row
        .find('[data-field="key2"]')
        .first()
        .html(elem.key2);
    } else {
      const code = elem.code || '';
      if (code.trim() !== '') {
        row.addClass('bg-danger');
      }
    }
  });

  fProgress(data.reduce(fReduce, 0));
  fSaveSession(data.filter(fFilter));
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
  const datas = [];
  $(`.${STEP}row`).each(function(index, elem) {
    datas.push({
      "glyph": $(this).data('glyph'),
      "code": $(this).find('.form-control').first().val()
    })
  });

  return{
    "data": datas
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
  nbTotal = $(`.${STEP}row`).length;

  fLoadSession();

  $(`#${STEP} .check`)
    .first()
    .on('click', fCheck)
    .trigger('click');
});

