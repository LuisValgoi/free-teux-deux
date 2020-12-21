export function getCurrentWeekNumber() {
  var onejan = new Date(new Date().getFullYear(), 0, 1);
  var today = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate());
  var dayOfYear = (today - onejan + 86400000) / 86400000;
  return Math.ceil(dayOfYear / 7) + 1;
}

export function getFullCurrentWeekDay() {
  return new Date().toLocaleDateString();
}

export function getDisabledDates(dayOfTheYear) {
  return toDate(dayOfTheYear) < toDate(new Date().toLocaleDateString());
}

function toDate(dateStr) {
  var parts = dateStr.split("/");
  return new Date(parts[2], parts[1] - 1, parts[0]);
}
