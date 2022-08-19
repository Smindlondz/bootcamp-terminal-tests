export default function isWeekday(day) {
  if (day.startsWith('S')) {
    return false;
  }
  else {
    return true
  }
}