const months = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December",
];
const weekdays = [
	"Sunday",
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday",
];

const giveaway = document.querySelector(".giveaway");
const deadline = document.querySelector(".deadline");
const items = document.querySelectorAll(".deadline-format h4");

let futureDate = new Date(2022, 10, 22, 0, 0, 0);

const year = futureDate.getFullYear();
const hours = ("0" + futureDate.getHours()).slice(-2);
const mins = ("0" + futureDate.getMinutes()).slice(-2);

let month = futureDate.getMonth();
month = months[month];
const date = futureDate.getDate();

const weekday = weekdays[futureDate.getDay()];

giveaway.textContent = `giveaway ends on ${weekday}, ${date} ${month} ${year}   ${hours}:${mins}am`;

//future time in ms
const futureTime = futureDate.getTime();

function getRemainingTime() {
	const today = new Date().getTime();
	const t = futureTime - today;
	// 1s = 1000ms
	// 1m = 60s
	// 1hr = 60 min
	// 1d = 24hr
	const oneDay = 24 * 60 * 60 * 1000;
	const oneHour = 60 * 60 * 1000;
	const oneMinute = 60 * 1000;
	const oneSecond = 1000;
	//Calculate
	let days = t / oneDay;
	days = Math.floor(days);
	let hours = Math.floor((t % oneDay) / oneHour);
	let minutes = Math.floor((t % oneHour) / oneMinute);
	let seconds = Math.floor((t % oneMinute) / oneSecond);

	//set values array
	const values = [days, hours, minutes, seconds];

	function format(item) {
		if (item < 10) {
			return (item = `0${item}`);
		}
		return item;
	}

	items.forEach(function (item, index) {
		item.innerHTML = format(values[index]);
	});
	if (t < 0) {
		clearInterval(coutdown);
		deadline.innerHTML = `<h4 class='expired'>Sorry, this giveaway has expired</h4>`;
	}
}
//countdown
let coutdown = setInterval(getRemainingTime, 1000);
getRemainingTime();
