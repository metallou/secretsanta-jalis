window.isFunction = function(functionToCheck) {
  return functionToCheck && {}.toString.call(functionToCheck) === '[object Function]';
}

const fOUT = function() {
  alert('JSON failure');
};

window.fThen = function(fSuccess, fError) {
  return function(json) {
    let f = fOUT;

    switch (json.status) {
      case 'success':
        if(isFunction(fSuccess)) {
          f = fSuccess;
        } else {
          throw 'sucess function error';
        }
        break;
      case 'error':
        if(isFunction(fError)) {
          f = fError;
        } else {
          throw 'error function error';
        }
        break;
    }

    f(json.data);
  };

  return fReturn;
};

window.appStorage = sessionStorage;

const CSRF_TOKEN = $('meta[name="csrf-token"]').attr('content');

jQuery.ajaxSetup({
  "type": 'POST',
  "dataType": 'JSON',
  "headers": {
    'X-CSRF-TOKEN': CSRF_TOKEN
  }
});
