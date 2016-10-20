$(function() {
  
  //startCountdown();
  $('#js-start-countdown').click(function() {
    window.minutes = $('input[name=minutes]').val();;
    window.seconds = $('input[name=seconds]').val();;
    window.next = $('input[name=speaker]').val();
    startCountdown();
  });
});
var interval;

function startCountdown() {
  $('#input-container').hide();
  $('#countdown-container').show();
  $('#js-next').text(window.next);
  displayValue('#js-minutes', window.minutes);
  displayValue('#js-seconds', window.seconds);

  interval = setInterval(function() {
    if (window.seconds > 0) {
      window.seconds--;
      displayValue('#js-seconds', window.seconds);
    } else {
      if (window.minutes > 0) {
        window.minutes--;
        displayValue('#js-minutes', window.minutes);
        displayValue('#js-seconds', window.seconds);
        window.seconds = 60;
      }
    }
  }, 1000);
}

function displayValue(target, value) {
  var newDigit = $('<span></span>');
  $(newDigit).text(pad(value))
    .addClass('new');
  $(target).prepend(newDigit);
  $(target).find('.current').addClass('old').removeClass('current');
  setTimeout(function() {
    $(target).find('.old').remove();
    $(target).find('.new').addClass('current').removeClass('new');
  }, 900);
}

function pad(number) {
  return ("0" + number).slice(-2);
}