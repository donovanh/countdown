$(function() {
  // window.minutes = 9;
  // window.seconds = 11;

  // startCountdown();
  $('#js-start-countdown').click(function() {
    window.minutes = $('input[name=minutes]').val();
    window.seconds = $('input[name=seconds]').val();
    $('#js-next').text($('input[name=next]').val());
    $('#js-talk-type').text($('input[name=talk-type]').val());
    startCountdown();
  });
});
var interval;

function startCountdown() {
  $('#input-container').hide();
  $('#countdown-container').show();

  displayValue('#js-minutes', window.minutes);
  displayValue('#js-seconds', window.seconds);

  interval = setInterval(function() {
    if (window.seconds > 0) {
      window.seconds--;
      displayValue('#js-seconds', window.seconds);
    } else {
      if (window.minutes > 0) {
        window.minutes--;
        window.seconds = 59;
        displayValue('#js-minutes', window.minutes);
        displayValue('#js-seconds', window.seconds);
      } else {
        $('#js-countdown').addClass('remove');
        $('#js-next-container').addClass('bigger');
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