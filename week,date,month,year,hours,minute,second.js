const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const months = [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
];

function getDate() {
  const d = new Date();
  return `${days[d.getDay()]} || ${d.getDate().toString().padStart(2, "0")} ${months[d.getMonth()]
  } ${d.getFullYear()} |`;
}

function getTime() {
  const now = new Date();
  let hours = now.getHours() % 12 || 12; // Convert 0 or 24 to 12
  const minutes = now.getMinutes().toString().padStart(2, "0");
  return `${hours.toString().padStart(2, "0")} : ${minutes} ${
    hours >= 12 ? "PM" : "AM"
  }`;
}

date.innerHTML = `${getDate()}| ${getTime()}`;
