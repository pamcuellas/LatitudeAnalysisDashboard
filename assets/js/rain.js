var makeItRain = function() {

  $('.rain').empty();

  var sum = 0;
  var drops = "";
  var backDrops = "";

  while (sum < 100) {
    var randoHundo = (Math.floor(Math.random() * (98 - 1 + 1) + 1));
    var randoFiver = (Math.floor(Math.random() * (5 - 2 + 1) + 2));
    sum += randoFiver;
    if (sum < 99) {
        drops += '<div class="drop" style="left: ' + sum + '%; bottom: ' + (randoFiver + randoFiver - 1 + 100) + '%; animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"><div class="stem" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"></div><div class="splat" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"></div></div>';
        backDrops += '<div class="drop" style="right: ' + sum + '%; bottom: ' + (randoFiver + randoFiver - 1 + 100) + '%; animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"><div class="stem" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"></div><div class="splat" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"></div></div>';
    }
  }

  $('.rain.front-row').append(drops);
  $('.rain.back-row').append(backDrops);
}

makeItRain();