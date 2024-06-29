'use strict';

const trafficLight2 = {
  possibleStates: ['green', 'orange', 'red'],
  stateIndex: 0,
};

let cycle2 = 0;
let trafficLight2Output = '';

while (cycle2 < 2) {
  const currentState = trafficLight2.possibleStates[trafficLight2.stateIndex];
  console.log("The traffic light is on", currentState);
  trafficLight2Output += `The traffic light is on ${currentState}\n`;

  switch (currentState) {
    case 'green':
      trafficLight2.stateIndex = 1;
      break;
    case 'orange':
      trafficLight2.stateIndex = 2;
      break;
    case 'red':
      cycle2++;
      trafficLight2.stateIndex = 0;
      break;
    default:
      break;
  }
}

document.getElementById('trafficLight2Output').textContent =
  trafficLight2Output;
