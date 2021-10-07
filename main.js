var $img = document.querySelector('img');
var intervalID;

function stopCounting(interval) {
  clearInterval(interval);
  intervalID = null;
}

function startCar(locationX) {
  var movedPixel = locationX;

  if (!intervalID) {
    intervalID = setInterval(function () {
      if (movedPixel > 1300) {
        movedPixel = 0;
      }
      movedPixel = movedPixel + 7;
      $img.style.transform = 'translateX(' + movedPixel + 'px)';
    }, 16);
  } else {
    stopCounting(intervalID);
  }

}

function keyhandler(event) {

  var keyCode = event.code;

  if (keyCode === 'ArrowUp') {
    $img.style.transform = 'rotate(-90deg)';
  } else if (keyCode === 'ArrowDown') {
    $img.style.transform = 'rotate(90deg)';
  } else if (keyCode === 'ArrowRight') {
    $img.style.transform = 'rotate(0)';
  } else if (keyCode === 'ArrowLeft') {
    $img.style.transform = 'rotate(180deg)';
  } else if (keyCode === 'Space') {
    var locationX = window.scrollX + $img.getBoundingClientRect().left;
    startCar(locationX);
  }

}

document.addEventListener('keydown', keyhandler);
