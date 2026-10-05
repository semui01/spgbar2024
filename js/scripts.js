// Progress through the current year, computed from the visitor's local date.
const now = new Date();
const year = now.getFullYear();

const startOfYear = new Date(year, 0, 1);
const startOfNextYear = new Date(year + 1, 0, 1);
const daysInYear = Math.round((startOfNextYear - startOfYear) / 86400000); // 365 or 366 (leap-year aware)

// Day of the year, 1 on Jan 1. Date.UTC avoids DST shifting the day count.
const dayOfYear = Math.round(
    (Date.UTC(year, now.getMonth(), now.getDate()) - Date.UTC(year, 0, 1)) / 86400000
) + 1;

const pct = Math.min(100, Math.ceil(dayOfYear / daysInYear * 100));

$("#year").text(year);
$("#date").text(year);
$("#day").text(dayOfYear);
$("#pct").text(pct);
$("#pcts").text(pct + "% complete");
$("#pgs").attr("aria-valuenow", pct).css("width", pct + "%");

const desctn = "It's " + dayOfYear + " Days into " + year + ", " + pct + "% complete.";
$("meta[name='twitter:title']").attr("content", desctn);
$("meta[property='og:description']").attr("content", desctn);
document.title = "⌛ Progress Bar " + year + " ⌛";

// heart in footer changes size
function bigImg(x){
    x.style.fontSize = "60px";
}

function normalImg(x){
    x.style.fontSize = "25px";
}
