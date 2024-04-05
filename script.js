"use strict";

// geting IDs of elementst
let hrs = document.getElementById("hrs");
let min = document.getElementById("min");
let secs = document.getElementById("secs");

setInterval(() => {
  // For the date and time to keep updating, we need to use a set interval and set it at 1000 miliseconds which is equal to 1000 seconds. This will make the update each second. in other words, the date, hour, minutes and seconds will be updated per second
  let currentDayTime = new Date(); // This will get the date and time and store it into the variable

  // But I can get the hours, date and seconds using the getHours, getMinutes and getSeconds function
  hrs.innerHTML =
    (currentDayTime.getHours() < 10 ? "0" : "") + currentDayTime.getHours(); // This gets the hour. Now, understand what is happening here. I used a tenary opereator to say is the current hour  less than 10? if it is, then do a 0 + currentDayTime hour. else, add nothing in front. this will make hours like 7, 2, 4 appear as 07,02 and 04.
  min.innerHTML =
    (currentDayTime.getMinutes() < 10 ? "0" : "") + currentDayTime.getMinutes(); // This gets the minutes. Now, understand what is happening here. I used a tenary opereator to say is the current minute  less than 10? if it is, then do a 0 + currentDayTime minute. else, add nothing in front. this will make minutes like 7, 2, 4 appear as 07,02 and 04.
  secs.innerHTML =
    (currentDayTime.getSeconds() < 10 ? "0" : "") + currentDayTime.getSeconds(); // This gets the seconds. Now, understand what is happening here. I used a tenary opereator to say is the current second less than 10? if it is, then do a 0 + currentDayTime second. else, add nothing in front. this will make seconds like 7, 2, 4 appear as 07,02 and 04.
}, 1000);
