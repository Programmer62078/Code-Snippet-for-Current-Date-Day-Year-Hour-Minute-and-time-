const getCurrentDay = () => {
  var week = [
    "Sunday",
    "Monday",
    "Tuseday",
    "Wed",
    "Thrusday",
    "Friday",
    "Saturday",
  ];

  let currentTime = new Date();
  let day = week[currentTime.getDay()];
  return day;
};

function formatDate(date) {
  var monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "June",
    "July",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];
  // var now = new Date();
  var day = date.getDate();
  var monthIndex = date.getMonth();
  var year = date.getFullYear();

  var h = date.getHours();
  var m = date.getMinutes();
  var x = h >= 12 ? "pm" : "am";
  h = h % 12;
  h = h ? h : 12;
  m = m < 10 ? "0" + m : m;

  return `${day} ${monthNames[monthIndex]} ${year} |  ${h} :${m} ${x}`;
}
//return `${day} ${monthNames[monthIndex]} ${year} | ${hours}:${mins}${periods}`;



currentDate.innerHTML = getCurrentDay() + " | " + formatDate(new Date());
//formatDate(new Date());
