console.log("See the date easily here");

let date = document.getElementById("date");
let mon = document.getElementById("mon");
let day = document.getElementById("day");
let yera = document.getElementById("year");

let week = ["Sunday", "Monday", "Tuesday", " Wednessday ", "Thursday ", "Friday", " Saturday "]
let month = ["January", " Febuary", " March", " April", " May ", "June ", "July", " August", " September", " October", "November", "December"]

setTimeout(() => {
    date.innerHTML = (new Date().getDate()<10 ?"0": "")+ new Date().getDate();
    mon.innerHTML = month[new Date().getMonth()];
    year.innerHTML = new Date().getFullYear()
    day.innerHTML = week[new Date().getDay()]
}, 500);