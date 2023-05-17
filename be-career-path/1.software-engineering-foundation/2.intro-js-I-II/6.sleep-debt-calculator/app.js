function getSleepHours(day) {
  switch (day) {
    case 'Monday':
    return 8;
    break;
    case 'Tuesday':
    return 7;
    break;
    case 'Wednesday':
    return 6;
    break;
    case 'Thursday':
    return 8;
    break;
    case 'Friday':
    return 6;
    break;
    case 'Saturday':
    return 7;
    break;
    case 'Sunday':
    return 5;
    break;
    default:
    console.log('Enter a day');
  }
};

function getActualSleepHours() {
  const total = getSleepHours('Monday') + getSleepHours('Tuesday') + getSleepHours('Wednesday') + getSleepHours('Thursday') + getSleepHours('Friday') + getSleepHours('Saturday') + getSleepHours('Sunday');

  return total;
}

function getIdealSleepHours() {
  const idealHours = 8 * 7;
  return idealHours;
}

function calculateSleepDebt() {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();

  if (actualSleepHours === idealSleepHours) {
    console.log('You got the expected amount of sleep hours')
  } else if (actualSleepHours > idealSleepHours) {
    const total = actualSleepHours - idealSleepHours;
    console.log(`You got ${total} more hours of sleep than expected`);
  } else {
    const total = idealSleepHours - actualSleepHours  ;

    console.log(`You should try to sleep more, you slept ${total} less hours than expected`);
  }
}

calculateSleepDebt();
// console.log(getActualSleepHours(), getIdealSleepHours());