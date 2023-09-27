import getTimeToNewYear from './method.js'
let cur_date = Date.now();
/*let year = new Date().getFullYear();
let end_of_the_year = new Date(year, 11, 31);
end_of_the_year = end_of_the_year.getTime();
/*
console.log(cur_date);
console.log(end_of_the_year);

let raznost = end_of_the_year - cur_date;
raznost = raznost / 1000 / 60 / 60 / 24;*/
console.log(getTimeToNewYear(cur_date));
console.log(Math.floor(getTimeToNewYear(cur_date)));