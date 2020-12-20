const WEEKDAY = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

export function getCurrentWeekDay() {
  return WEEKDAY[new Date().getDay()];
}

export function getFullCurrentWeekDay() {
  return new Date().toLocaleDateString();
}

export function getWeekDayIncrementedBy(day) {
  var futureDay = new Date();
  futureDay.setDate(futureDay.getDate() + day);
  return WEEKDAY[new Date(futureDay).getDay()];
}

export function getWeekDayDecreasedBy(day) {
  var oldDay = new Date();
  oldDay.setDate(oldDay.getDate() - day);
  return WEEKDAY[new Date(oldDay).getDay()];
}

export function getFullWeekDayIncrementedBy(day) {
  var futureDay = new Date();
  futureDay.setDate(futureDay.getDate() + day);
  return new Date(futureDay).toLocaleDateString();
}

export function getFullWeekDayDecreasedBy(day) {
  var oldDay = new Date();
  oldDay.setDate(oldDay.getDate() - day);
  return new Date(oldDay).toLocaleDateString();
}
