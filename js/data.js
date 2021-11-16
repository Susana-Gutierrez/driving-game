/* exported data */

var data = {
  valueX: 'translateX(0)',
  valueY: 'translateX(0)',
  direction: 'rotate(0)'
};

const previousDrivingGameJSON = localStorage.getItem('javascript-local-storage');

if (previousDrivingGameJSON !== null) {
  data = JSON.parse(previousDrivingGameJSON);
}

function handleBeforeUnload(event) {
  const drivingGameJSON = JSON.stringify(data);
  localStorage.setItem('javascript-local-storage', drivingGameJSON);
}

window.addEventListener('beforeunload', handleBeforeUnload);
