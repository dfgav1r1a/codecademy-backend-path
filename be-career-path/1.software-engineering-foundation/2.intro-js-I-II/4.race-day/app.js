let raceNumber = Math.floor(Math.random() * 1000);

let regEarly = false;
let runnerAge = 25 ;

if (regEarly && runnerAge > 18) {
  console.log(raceNumber = raceNumber + 1000);
}

if (runnerAge > 18 && regEarly) {
  console.log(`${raceNumber}, You will race at 9:30am.`);
} else if (runnerAge >18 && !regEarly) {
  console.log(`${raceNumber}, will run at 11:00 am.`);
} else if (runnerAge < 18) {
  console.log(`${raceNumber} will run at 12:30 pm.`);
} else {
  console.log('Please see registration desk');
}

