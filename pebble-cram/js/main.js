(function() {
  loadOptions();
  submitHandler();
})();

function submitHandler() {
  var $submitButton = $('#submitButton');

  $submitButton.on('click', function() {
    console.log('Submit');

    var return_to = getQueryParam('return_to', 'pebblejs://close#');
    document.location = return_to + encodeURIComponent(JSON.stringify(getAndStoreConfigData()));
  });
}

function loadOptions() {
  var $backgroundColorPicker = $('#backgroundColorPicker');
  var $hourTXTColorPicker = $('#hourTXTColorPicker');
  var $hourBGColorPicker = $('#hourBGColorPicker');
  var $minTXTColorPicker = $('#minTXTColorPicker');
  var $minBGColorPicker = $('#minBGColorPicker');
  var $calHDRTXTColorPicker = $('#calHDRTXTColorPicker');
  var $calHDRBGColorPicker = $('#calHDRBGColorPicker');
  var $calTXTColorPicker = $('#calTXTColorPicker');
  var $calBGColorPicker = $('#calBGColorPicker');
  var $calTODAYTXTColorPicker = $('#calTODAYTXTColorPicker');
  var $calTODAYBGColorPicker = $('#calTODAYBGColorPicker');
  var $dateboxTXTColorPicker = $('#dateboxTXTColorPicker');
  var $dateboxBGColorPicker = $('#dateboxBGColorPicker');
  var $tzlefTXTColorPicker = $('#tzlefTXTColorPicker');
  var $tzlefBGColorPicker = $('#tzlefBGColorPicker');
  var $tzmidTXTColorPicker = $('#tzmidTXTColorPicker');
  var $tzmidBGColorPicker = $('#tzmidBGColorPicker');
  var $tzrightTXTColorPicker = $('#tzrightTXTColorPicker');
  var $tzrightBGColorPicker = $('#tzrightBGColorPicker');

  if (localStorage.backgroundColor) {
    $backgroundColorPicker[0].value = localStorage.backgroundColor;
    $hourTXTColorPicker[0].value = localStorage.hourTXTColorPicker;
    $hourBGColorPicker[0].value = localStorage.hourBGColorPicker;
    $minTXTColorPicker[0].value = localStorage.minTXTColorPicker;
    $minBGColorPicker[0].value = localStorage.minBGColorPicker;
    $calHDRTXTColorPicker[0].value = localStorage.calHDRTXTColorPicker;
    $calHDRBGColorPicker[0].value = localStorage.calHDRBGColorPicker;
    $calTXTColorPicker[0].value = localStorage.calTXTColorPicker;
    $calBGColorPicker[0].value = localStorage.calBGColorPicker;
    $calTODAYTXTColorPicker[0].value = localStorage.calTODAYTXTColorPicker;
    $calTODAYBGColorPicker[0].value = localStorage.calTODAYBGColorPicker;
    $dateboxTXTColorPicker[0].value = localStorage.dateboxTXTColorPicker;
    $dateboxBGColorPicker[0].value = localStorage.dateboxBGColorPicker;
    $tzlefTXTColorPicker[0].value = localStorage.tzlefTXTColorPicker;
    $tzlefBGColorPicker[0].value = localStorage.tzlefBGColorPicker;
    $tzmidTXTColorPicker[0].value = localStorage.tzmidTXTColorPicker;
    $tzmidBGColorPicker[0].value = localStorage.tzmidBGColorPicker;
    $tzrightTXTColorPicker[0].value = localStorage.tzrightTXTColorPicker;
    $tzrightBGColorPicker[0].value = localStorage.tzrightBGColorPicker;

    //$timeFormatCheckbox[0].checked = localStorage.twentyFourHourFormat === 'true';
  }
}

function getAndStoreConfigData() {
  var $backgroundColorPicker = $('#backgroundColorPicker');
  var $hourTXTColorPicker = $('#hourTXTColorPicker');
  var $hourBGColorPicker = $('#hourBGColorPicker');
  var $minTXTColorPicker = $('#minTXTColorPicker');
  var $minBGColorPicker = $('#minBGColorPicker');
  var $calHDRTXTColorPicker = $('#calHDRTXTColorPicker');
  var $calHDRBGColorPicker = $('#calHDRBGColorPicker');
  var $calTXTColorPicker = $('#calTXTColorPicker');
  var $calBGColorPicker = $('#calBGColorPicker');
  var $calTODAYTXTColorPicker = $('#calTODAYTXTColorPicker');
  var $calTODAYBGColorPicker = $('#calTODAYBGColorPicker');
  var $dateboxTXTColorPicker = $('#dateboxTXTColorPicker');
  var $dateboxBGColorPicker = $('#dateboxBGColorPicker');
  var $tzlefTXTColorPicker = $('#tzlefTXTColorPicker');
  var $tzlefBGColorPicker = $('#tzlefBGColorPicker');
  var $tzmidTXTColorPicker = $('#tzmidTXTColorPicker');
  var $tzmidBGColorPicker = $('#tzmidBGColorPicker');
  var $tzrightTXTColorPicker = $('#tzrightTXTColorPicker');
  var $tzrightBGColorPicker = $('#tzrightBGColorPicker');
  //var $timeFormatCheckbox = $('#timeFormatCheckbox');

  var options = {
    backgroundColor: $backgroundColorPicker.val(),
    hourTXTColorPicker: $hourTXTColorPicker.val(),
    hourBGColorPicker: $hourBGColorPicker.val(),
    minTXTColorPicker: $minTXTColorPicker.val(),
    minBGColorPicker: $minBGColorPicker.val(),
    calHDRTXTColorPicker: $calHDRTXTColorPicker.val(),
    calHDRBGColorPicker: $calHDRBGColorPicker.val(),
    calTXTColorPicker: $calTXTColorPicker.val(),
    calBGColorPicker: $calBGColorPicker.val(),
    calTODAYTXTColorPicker: $calTODAYTXTColorPicker.val(),
    calTODAYBGColorPicker: $calTODAYBGColorPicker.val(),
    dateboxTXTColorPicker: $dateboxTXTColorPicker.val(),
    dateboxBGColorPicker: $dateboxBGColorPicker.val(),
    tzlefTXTColorPicker: $tzlefTXTColorPicker.val(),
    tzlefBGColorPicker: $tzlefBGColorPicker.val(),
    tzmidTXTColorPicker: $tzmidTXTColorPicker.val(),
    tzmidBGColorPicker: $tzmidBGColorPicker.val(),
    tzrightTXTColorPicker: $tzrightTXTColorPicker.val(),
    tzrightBGColorPicker: $tzrightBGColorPicker.val()
    //twentyFourHourFormat: $timeFormatCheckbox[0].checked
  };

  localStorage.backgroundColor = options.backgroundColor;
  localStorage.hourTXTColorPicker = options.hourTXTColorPicker;
  localStorage.hourBGColorPicker = options.hourBGColorPicker;
  localStorage.minTXTColorPicker = options.minTXTColorPicker;
  localStorage.minBGColorPicker = options.minBGColorPicker;
  localStorage.calHDRTXTColorPicker = options.calHDRTXTColorPicker;
  localStorage.calHDRBGColorPicker = options.calHDRBGColorPicker;
  localStorage.calTXTColorPicker = options.calTXTColorPicker;
  localStorage.calBGColorPicker = options.calBGColorPicker;
  localStorage.calTODAYTXTColorPicker = options.calTODAYTXTColorPicker;
  localStorage.calTODAYBGColorPicker = options.calTODAYBGColorPicker;
  localStorage.dateboxTXTColorPicker = options.dateboxTXTColorPicker;
  localStorage.dateboxBGColorPicker = options.dateboxBGColorPicker;
  localStorage.tzlefTXTColorPicker = options.tzlefTXTColorPicker;
  localStorage.tzlefBGColorPicker = options.tzlefBGColorPicker;
  localStorage.tzmidTXTColorPicker = options.tzmidTXTColorPicker;
  localStorage.tzmidBGColorPicker = options.tzmidBGColorPicker;
  localStorage.tzrightTXTColorPicker = options.tzrightTXTColorPicker;
  localStorage.tzrightBGColorPicker = options.tzrightBGColorPicker;
  //localStorage.twentyFourHourFormat = options.twentyFourHourFormat;

  console.log('Got options: ' + JSON.stringify(options));
  return options;
}

function getQueryParam(variable, defaultValue) {
  var query = location.search.substring(1);
  var vars = query.split('&');
  for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split('=');
    if (pair[0] === variable) {
      return decodeURIComponent(pair[1]);
    }
  }
  return defaultValue || false;
}
