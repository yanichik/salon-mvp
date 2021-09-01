module.exports = function sortTransactions(unsortedXactions, startDate, endDate){
	const dates = [];
	unsortedXactions.forEach( (item, ind) => {
	  dates.push({date: new Date(item.date)});
	})
	/* console.log(dates[0].date) */
	dates.forEach((day, ind) => {
	  day.ind = ind;
	  day.stamp = day.date.getTime();
	  day.date = day.date.toString();
	/*   console.log(day.stamp); */
	})
	 // console.log(dates); 

	const day2mil = 24*60*60*1000;
	const thirtyDays2mil = 30*day2mil;
	const year2mil = day2mil*365;
	// const numDays2mil = numDays*24*60*60*1000;

	var start = new Date(startDate);
	/* console.log(Date(start)) */
	start.setUTCHours(0,0,0,0);
	/* console.log(typeof start) */
	/* console.log(start.toString()) */

	// start = new Date(start.getTime() - numDays2mil);
	 // console.log(start.toString()) 

	var end = new Date(endDate);
	end.setUTCHours(23,59,59,999);
	 // console.log(end.toString()) 

	/* alert( start.toUTCString() + ':' + end.toUTCString() ); */

	let result = dates.filter(function(obj){
	  return obj.stamp >=start.getTime() && obj.stamp <=end.getTime();
	})
	// console.log(result);
	// descending order: most recent to least recent
	const sortedResult = result.sort((a,b) =>{
	  return b.stamp - a.stamp
	});
	const sortedXactions = [];
	sortedResult.forEach( (item, ind) => {
		sortedXactions[ind] = unsortedXactions[item.ind];
	})
	// console.log(sortedXactions);
	return sortedXactions;
}