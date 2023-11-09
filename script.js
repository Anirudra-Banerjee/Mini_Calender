
const date = document.getElementsByTagName("p")[0];
const day = document.getElementsByTagName("p")[1];
const month = document.getElementsByTagName("p")[2];
const year = document.getElementsByTagName("p")[3];


const weekDays  = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["January", "February", "MArch", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const today = new Date();

date.innerHTML = (today.getDate() < 10 ? "0" : "") + today.getDate();
day.innerHTML = weekDays[today.getDay()];
month.innerHTML = months[today.getMonth()];
year.innerHTML = today.getFullYear();