var $img = document.querySelector('img');

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
  }

}

document.addEventListener('keydown', keyhandler);
