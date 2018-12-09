const nbTotal = 3;
let nbCurrent = 0;
const STEP = 'step2';

const fGetSession = function() {
  const data = appStorage.getItem(STEP) || JSON.stringify([]);

  return JSON.parse(data);
};
const fSaveSession = function(data) {
  let datas = fGetSession();
  datas
    .push(...data);

  appStorage.setItem(STEP, JSON.stringify(datas));
};
const fLoadSession = function() {
  fGetSession()
    .forEach(function(elem, index, array) {
    const holder = $(`.${STEP}slot[data-field="${elem.field}"]`);
    const type = $(`.${STEP}type[data-name="${elem.name}"]`);

    holder.append(type);
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
    const name = elem.name;
    const type = $(`.${STEP}type[data-name="${name}"]`);
    const slot = type.closest(`.${STEP}slot`);

    if (elem.success) {
      type.removeClass(`${STEP}type`);
      slot
        .removeClass(`${STEP}slot`)
        .removeClass('bg-danger')
        .addClass('bg-success');
    } else {
      slot.addClass('bg-danger');
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

const fSelect = function(holder, jQelem) {
  holder
    .find(`.${STEP}type`)
    .each(function(index, elem) {
      fUnselect($(this));
    });

  holder
    .append(jQelem);
};
const fUnselect = function(jQelem) {
  $(`#${STEP}types`).append(jQelem);
};

const fGetData = function() {
  const datas = [];
  $(`.${STEP}slot`).each(function(index, elem) {
    const type = $(this).find(`.${STEP}type`).first();
    const name = type.length ? type.data('name'): '';
    datas.push({
      "name": name,
      "field": $(this).data('field')
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
  fLoadSession();

  $(`#${STEP} .check`)
    .first()
    .on('click', fCheck)
    .trigger('click');

  $(`.${STEP}type`)
    .draggable({
      "cancel": 'a.ui-icon',
      "revert": 'invalid',
      "containment": 'document',
      "helper": 'clone',
      "cursor": 'move'
    });
  $(`.${STEP}slot̀`)
    .droppable({
      "accept": `.${STEP}type`,
      "greedy": true,
      "drop": function(event, ui) {
        fSelect($(this), ui.draggable);
      }
    });
  $(`#${STEP}types`)
    .droppable({
      "accept": `.${STEP}type`,
      "greedy": true,
      "drop": function(event, ui) {
        fUnselect(ui.draggable);
      }
    });
});

