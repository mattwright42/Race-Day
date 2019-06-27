let raceNumber = Math.floor(Math.random() * 1000);

// indicates whether a runner registered early or not
let earlyReg = true;

// variable for runner's age
let runnerAge = 18;

if (runnerAge > 18 && earlyReg === true) {
  raceNumber += 1000;
}

if (runnerAge > 18 && earlyReg === true) {
  console.log(
    `Your race number is ${raceNumber} and you will race at 9:30 AM.`
  );
} else if (runnerAge > 18 && !earlyReg) {
  console.log(
    `Your race number is ${raceNumber} and you will race at 11:00 AM.`
  );
} else {
  console.log('Please see the registration desk.');
}

if (runnerAge < 18) {
  console.log(
    `Your race number is ${raceNumber} and you will race at 12:30 AM.`
  );
}
