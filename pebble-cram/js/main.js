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
  var $cityweatherTXTtxtbox = $('#cityweatherTXTtxtbox');
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
  var $tztopTXTColorPicker = $('#tztopTXTColorPicker');
  var $tztopBGColorPicker = $('#tztopBGColorPicker');
  var $tzmidTXTColorPicker = $('#tzmidTXTColorPicker');
  var $tzmidBGColorPicker = $('#tzmidBGColorPicker');
  var $tzbottomTXTColorPicker = $('#tzbottomTXTColorPicker');
  var $tzbottomBGColorPicker = $('#tzbottomBGColorPicker');
  var $tztopNUMtxtbox = $('#tztopNUMtxtbox');
  var $tztopTXTtxtbox = $('#tztopTXTtxtbox');
  var $tzmidNUMtxtbox = $('#tzmidNUMtxtbox');
  var $tzmidTXTtxtbox = $('#tzmidTXTtxtbox');
  var $tzbottomNUMtxtbox = $('#tzbottomNUMtxtbox');
  var $tzbottomTXTtxtbox = $('#tzbottomTXTtxtbox');

  if (localStorage.backgroundColor) {
    $cityweatherTXTtxtbox[0].value = localStorage.cityweatherTXTtxtbox;
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
    $tztopTXTColorPicker[0].value = localStorage.tztopTXTColorPicker;
    $tztopBGColorPicker[0].value = localStorage.tztopBGColorPicker;
    $tzmidTXTColorPicker[0].value = localStorage.tzmidTXTColorPicker;
    $tzmidBGColorPicker[0].value = localStorage.tzmidBGColorPicker;
    $tzbottomTXTColorPicker[0].value = localStorage.tzbottomTXTColorPicker;
    $tzbottomBGColorPicker[0].value = localStorage.tzbottomBGColorPicker;
    $tztopNUMtxtbox[0].value = localStorage.tztopNUMtxtbox;
    $tztopTXTtxtbox[0].value = localStorage.tztopTXTtxtbox;
    $tzmidNUMtxtbox[0].value = localStorage.tzmidNUMtxtbox;
    $tzmidTXTtxtbox[0].value = localStorage.tzmidTXTtxtbox;
    $tzbottomNUMtxtbox[0].value = localStorage.tzbottomNUMtxtbox;
    $tzbottomTXTtxtbox[0].value = localStorage.tzbottomTXTtxtbox;
    //$timeFormatCheckbox[0].checked = localStorage.twentyFourHourFormat === 'true';
  }
}

function getAndStoreConfigData() {
  var $cityweatherTXTtxtbox = $('#cityweatherTXTtxtbox');
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
  var $tztopTXTColorPicker = $('#tztopTXTColorPicker');
  var $tztopBGColorPicker = $('#tztopBGColorPicker');
  var $tzmidTXTColorPicker = $('#tzmidTXTColorPicker');
  var $tzmidBGColorPicker = $('#tzmidBGColorPicker');
  var $tzbottomTXTColorPicker = $('#tzbottomTXTColorPicker');
  var $tzbottomBGColorPicker = $('#tzbottomBGColorPicker');
  var $tztopNUMtxtbox = $('#tztopNUMtxtbox');
  var $tztopTXTtxtbox = $('#tztopTXTtxtbox');
  var $tzmidNUMtxtbox = $('#tzmidNUMtxtbox');
  var $tzmidTXTtxtbox = $('#tzmidTXTtxtbox');
  var $tzbottomNUMtxtbox = $('#tzbottomNUMtxtbox');
  var $tzbottomTXTtxtbox = $('#tzbottomTXTtxtbox');
  //var $timeFormatCheckbox = $('#timeFormatCheckbox');

  var options = {
    cityweatherTXTtxtbox: $cityweatherTXTtxtbox.val(),
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
    tztopTXTColorPicker: $tztopTXTColorPicker.val(),
    tztopBGColorPicker: $tztopBGColorPicker.val(),
    tzmidTXTColorPicker: $tzmidTXTColorPicker.val(),
    tzmidBGColorPicker: $tzmidBGColorPicker.val(),
    tzbottomTXTColorPicker: $tzbottomTXTColorPicker.val(),
    tzbottomBGColorPicker: $tzbottomBGColorPicker.val(),
    tztopNUMtxtbox: $tztopNUMtxtbox.val(),
    tztopTXTtxtbox: $tztopTXTtxtbox.val(),
    tzmidNUMtxtbox: $tzmidNUMtxtbox.val(),
    tzmidTXTtxtbox: $tzmidTXTtxtbox.val(),
    tzbottomNUMtxtbox: $tzbottomNUMtxtbox.val(),
    tzbottomTXTtxtbox: $tzbottomTXTtxtbox.val()
    //twentyFourHourFormat: $timeFormatCheckbox[0].checked
  };

  localStorage.cityweatherTXTtxtbox = options.cityweatherTXTtxtbox;
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
  localStorage.tztopTXTColorPicker = options.tztopTXTColorPicker;
  localStorage.tztopBGColorPicker = options.tztopBGColorPicker;
  localStorage.tzmidTXTColorPicker = options.tzmidTXTColorPicker;
  localStorage.tzmidBGColorPicker = options.tzmidBGColorPicker;
  localStorage.tzbottomTXTColorPicker = options.tzbottomTXTColorPicker;
  localStorage.tzbottomBGColorPicker = options.tzbottomBGColorPicker;
  localStorage.tztopNUMtxtbox = options.tztopNUMtxtbox;
  localStorage.tztopTXTtxtbox = options.tztopTXTtxtbox;
  localStorage.tzmidNUMtxtbox = options.tzmidNUMtxtbox;
  localStorage.tzmidTXTtxtbox = options.tzmidTXTtxtbox;
  localStorage.tzbottomNUMtxtbox = options.tzbottomNUMtxtbox;
  localStorage.tzbottomTXTtxtbox = options.tzbottomTXTtxtbox;
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
