$(function() {
  navigator.getBattery().then(function(result) {
    console.log(result);
  });
});
