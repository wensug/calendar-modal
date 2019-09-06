export function getFormatedDate(dateStr) {
  let date = new Date(dateStr);
  let days = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
  let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ];
  let dayWeek = days[date.getDay()];
  let mm = months[date.getMonth()];
  let dd = date.getDate();
  return `${dayWeek} ${mm} ${dd}`;
}

export function getDate(date) {
  let day = new Date(date);
  let dd = day.getDate();
  if (dd < 10) dd = "0" + dd;
  return dd;
}
