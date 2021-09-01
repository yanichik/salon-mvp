module.exports = function setDateAtFirstVisit(start, end) {
	if (!start) {
		start = "1/1/1900";
	}
	// if endDate left blank, set to today's date
	if (!end) {
		end = new Date().toLocaleString().split(",")[0];
	}
	// console.log("start: " + start, "end: " + end);
	return [start, end];
};
