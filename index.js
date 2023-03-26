function clock(){

//getting informations//
var today = new Date;
var hour = today.getHours(); 
var min = today.getMinutes();
var sec = today.getSeconds();
//days and months//
var daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var monthsOfYear = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var date = today.getDate();
var day = daysOfWeek[today.getDay()]
var month = monthsOfYear[today.getMonth()]
var year = today.getFullYear();

//adding logic//
if (hour > 12) {
    hour = hour - 12;
    document.getElementById('sesion').innerHTML = "PM"
}else {
    document.getElementById('sesion').innerHTML = "AM";
}

if (hour < 10) {hour = "0" + hour} else{ hour}
if (min < 10) {min = "0" + min} else{min}
if (sec < 10) {sec = "0" + sec}else{sec}

//adding information to html file//
document.getElementById("hr").innerHTML = hour 
document.getElementById("min").innerHTML = min
document.getElementById("sec").innerHTML = sec
document.getElementById("day").innerHTML = day + ","
document.getElementById("today").innerHTML = date
document.getElementById("month").innerHTML = month
document.getElementById("year").innerHTML = year

}

setInterval(clock, 1000);



