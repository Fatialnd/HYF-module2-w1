'use strict';

const trafficLight1 = {
  state: 'green',
};

let rotations1 = 0;
let trafficLight1Output = '';

while (rotations1 < 2) {
  const currentState = trafficLight1.state;
  console.log("The traffic light is on", currentState);
  trafficLight1Output += `The traffic light is on ${currentState}\n`;

  switch (currentState) {
    case 'green':
      trafficLight1.state = 'orange';
      break;
    case 'orange':
      trafficLight1.state = 'red';
      break;
    case 'red':
      rotations1++;
      trafficLight1.state = 'green';
      break;
    default:
      break;
  }
}

document.getElementById('trafficLight1Output').textContent =
  trafficLight1Output;
