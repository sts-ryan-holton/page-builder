$(function() {
  'use strict';
  function batteryCheck() {
    navigator.getBattery().then(function(batteryapi) {
      var battery = batteryapi;
      if (!battery.charging && battery.level >= 0.35 && battery.level <= 0.50) { // Not charging & 45% battery
        swal("Battery Level Low", "Your battery level is getting low, we recommend building a page whilst connected to a power supply.", "warning");
      } else if (!battery.charging && battery.level <= 0.34) {
        swal("Battery Level Critical", "We don't recommend building a page with this battery level percentage.", "error");
      }
    });
  }
  if ( $('body').length ) {
    batteryCheck();
  }
});
