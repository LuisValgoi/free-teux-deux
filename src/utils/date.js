export function getCurrentWeekNumber() {
  var onejan = new Date(new Date().getFullYear(), 0, 1);
  var today = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate());
  var dayOfYear = (today - onejan + 86400000) / 86400000;
  return Math.ceil(dayOfYear / 7) + 1;
}

export function getFullCurrentWeekDay() {
  return new Date().toLocaleDateString();
}
