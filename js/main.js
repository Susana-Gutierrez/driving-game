/* global data */
/* exported data */

var $img = document.querySelector('img');
var intervalID;
var direction = 'rotate(0)';
var valueX;
var valueY;

function stopCounting(interval) {
  clearInterval(interval);
  intervalID = null;
}

function startCar(direction, valueX, valueY) {

  var x = valueX;
  var y = valueY;

  if (!intervalID) {
    intervalID = setInterval(function () {

      /** right */
      if (direction === 'rotate(0)') {
        x = x + 4;
        $img.style.transform = 'translateX(' + x + 'px) translateY(' + y + 'px) rotate(0)';
      }

      /** down  */
      if (direction === 'rotate(90deg)') {
        y = y + 4;
        $img.style.transform = 'translateX(' + x + 'px)  translateY(' + y + 'px) rotate(90deg)';
      }

      /** up */
      if (direction === 'rotate(-90deg)') {
        y = y - 4;
        $img.style.transform = 'translateX(' + x + 'px)  translateY(' + y + 'px) rotate(-90deg)';
      }

      /** left */
      if (direction === 'rotate(180deg)') {
        x = x - 4;
        $img.style.transform = 'translateX(' + x + 'px)  translateY(' + y + 'px) rotate(180deg)';
      }

      var arrayPosition = $img.style.transform.split(' ');
      data.valueX = arrayPosition[0];
      data.valueY = arrayPosition[1];
      data.direction = arrayPosition[2];

    }, 16);
  } else {
    stopCounting(intervalID);
  }

}

function keyhandler(event) {

  valueX = $img.computedStyleMap().get('transform')[0].x.value;
  valueY = $img.computedStyleMap().get('transform')[1].y.value;

  var keyCode = event.code;

  if (keyCode === 'Space') {
    startCar(direction, valueX, valueY);
  } else {
    stopCounting(intervalID);
    if (keyCode === 'ArrowUp') {
      $img.style.transform = 'translateX(' + valueX + 'px)  translateY(' + valueY + 'px) rotate(-90deg)';
      direction = 'rotate(-90deg)';
    }

    if (keyCode === 'ArrowDown') {
      $img.style.transform = 'translateX(' + valueX + 'px)  translateY(' + valueY + 'px) rotate(90deg)';
      direction = 'rotate(90deg)';
    }

    if (keyCode === 'ArrowRight') {
      $img.style.transform = 'translateX(' + valueX + 'px)  translateY(' + valueY + 'px) rotate(0)';
      direction = 'rotate(0)';
    }

    if (keyCode === 'ArrowLeft') {
      $img.style.transform = 'translateX(' + valueX + 'px)  translateY(' + valueY + 'px) rotate(180deg)';
      direction = 'rotate(180deg)';
    }
    startCar(direction, valueX, valueY);
  }

}

document.addEventListener('keydown', keyhandler);

function handleDOMContentLoaded(event) {
  $img.style.transform = data.valueX + ' ' + data.valueY + ' ' + data.direction;
}

window.addEventListener('DOMContentLoaded', handleDOMContentLoaded);
