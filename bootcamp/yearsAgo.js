export default function yearsAgo(year) {
  var years = new Date().getFullYear() - year
  return years;
}