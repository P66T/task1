let cur_date = Date.now();
let year = new Date().getFullYear();
let end_of_the_year = new Date(year, 11, 31, 23, 59, 59);
end_of_the_year = end_of_the_year.getTime();
let raznost = end_of_the_year - cur_date;
raznost = raznost / 1000 / 60 / 60 / 24;
console.log(Math.floor(raznost));