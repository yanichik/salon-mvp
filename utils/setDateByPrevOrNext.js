// displays prev or next 30 days for 30-day view. Or prev or next month for monthly view
module.exports = function setDateByPrevOrNext(query, cookies, start, end){
	if (query.prevOrNext === 'next' && cookies.viewType === 'thirty-day') {
		start = new Date((new Date(cookies.startDate)).valueOf() + 30*24*60*60*1000).toLocaleString().split(',')[0]
		end = new Date((new Date(cookies.endDate)).valueOf() + 30*24*60*60*1000).toLocaleString().split(',')[0]
	}

	if (query.prevOrNext === 'prev' && cookies.viewType === 'thirty-day') {
		start = new Date((new Date(cookies.startDate)).valueOf() - 30*24*60*60*1000).toLocaleString().split(',')[0]
		end = new Date((new Date(cookies.endDate)).valueOf() - 30*24*60*60*1000).toLocaleString().split(',')[0]
	}
	if (query.prevOrNext === 'next' && cookies.viewType === 'monthly') {
		start = new Date((new Date(cookies.startDate).getFullYear()), (new Date(cookies.startDate).getMonth())+1, 1)
			.toLocaleString().split(',')[0];
		end = new Date((new Date(cookies.startDate).getFullYear()), (new Date(cookies.startDate).getMonth())+2, 0)
			.toLocaleString().split(',')[0];
	}
	if (query.prevOrNext === 'prev' && cookies.viewType === 'monthly') {
		start = new Date((new Date(cookies.startDate).getFullYear()), (new Date(cookies.startDate).getMonth()-1), 1)
			.toLocaleString().split(',')[0];
		end = new Date((new Date(cookies.startDate).getFullYear()), (new Date(cookies.startDate).getMonth()), 0)
			.toLocaleString().split(',')[0];
	}
	console.log("start: " + start + ", end: " + end);
	return [start, end];
}