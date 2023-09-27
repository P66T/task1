let year, end_of_the_year, raznost;
function getTimeToNewYear(curTime) {
    year = new Date().getFullYear();
    end_of_the_year = new Date(year, 11, 31);
    end_of_the_year = end_of_the_year.getTime();
    raznost = end_of_the_year - curTime;
    raznost = raznost / 1000 / 60 / 60 / 24;
    return raznost;
}
export default getTimeToNewYear;