module.exports = function yearsAgo(year){
  var date = (new Date).getFullYear();
  return date-year;
}
