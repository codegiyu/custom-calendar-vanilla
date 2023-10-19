const daysGroup = document.querySelector(".days-group");
const dateMonth = document.querySelector(".date-month");
const dateYear = document.querySelector(".date-year");
const nextMonthBtn = document.querySelector(".right-arrow");

const today = new Date();
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
let monthIdx = today.getMonth();
let yearIdx = today.getFullYear();
let monthArr = [];
let [, month, date, year] = today.toString().split(" ");


const getMonthArr = () => {
    let daysInCurrMonth = new Date(yearIdx, monthIdx + 1, 0).getDate();
    let firstDayOffset = new Date(yearIdx, monthIdx, 1).getDay();
    monthArr = Array(daysInCurrMonth + firstDayOffset)
    .fill(0).map((_,idx) => idx < firstDayOffset ? null : ++idx - firstDayOffset)
}
getMonthArr();

console.log(monthArr)
const loadDate = () => {
    dateMonth.innerHTML = months[monthIdx];
    dateYear.innerHTML = yearIdx;
}

loadDate();

const renderCalendarDays = () => {
    let htmlString = "";

    console.log(monthArr)
    for (item of monthArr) {
        if (!item) {
            htmlString += `<span class=""></span>`
        } else {
            htmlString += `<span class="day">${item}</span>`
        }
    }

    daysGroup.innerHTML = htmlString;
}

renderCalendarDays(monthArr);

const nextMonth = () => {
    if (monthIdx + 1 <= 11) {
        monthIdx++
    } else {
        monthIdx = 0;
        yearIdx++
    }
    getMonthArr();
    loadDate();
    renderCalendarDays();

}
nextMonthBtn.addEventListener("click", nextMonth);