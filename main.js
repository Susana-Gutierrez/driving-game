var $img = document.querySelector('img');
var intervalID;

function startCar() {
  var movedPixel = 7;

  if (!intervalID) {
    intervalID = setInterval(function () {
      movedPixel = movedPixel + 7;
      $img.style.transform = 'translateX(' + movedPixel + 'px)';
    }, 16);

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
    startCar();
  }

}

document.addEventListener('keydown', keyhandler);
