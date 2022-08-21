// code your solution here
function saturdayFun(activity) {
  if (activity === undefined) {
    return "This Saturday, I want to roller-skate!"
  } else {
    return 'This Saturday, I want to bathe my dog!';
  }
}
function mondayWork(activity) {
  if (activity === undefined) {
    return "This Monday, I will go to the office.";
  } else {
    return "This Monday, I will work from home.";
  }
}
function wrapAdjective(adjective) {
  return function(string) {
    if (adjective === '*') {
      return "You are *a hard worker*!";
    } else {
        return "You are ||a dedicated programmer||!";
        }
  }
}

