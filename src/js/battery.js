$(function() {
  'use strict';
  function batteryCheck() {
    navigator.getBattery().then(function(batteryapi) {
      let battery = batteryapi;
      if (!battery.charging && battery.level >= 0.35 && battery.level <= 0.50) { // Not charging & 50% battery
        swal('Battery Level Low', 'Your battery level is getting low, we recommend building a page whilst connected to a power supply.', 'warning')
      } else if (!battery.charging && battery.level <= 0.34) {
        swal('Battery Level Critical', 'We don\'t recommend building a page with this battery level percentage.', 'error')
      }
      if (!battery.charging && battery.level >= 0.51) {
        swal('Battery Not Charging', 'Your battery isn\'t charging. We recommend connecting your device to a power source before continuing.', 'warning')
      }
    });
  }
  if ( $('body').length ) {
    batteryCheck()
  }
});
