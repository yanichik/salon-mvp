module.exports = function setDateByViewType(cookies, viewTypeParam, start, end){
	// if viewType is 'thirty-day', reset to view last 30 days
	if (viewTypeParam === "thirty-day"){
		start = new Date(new Date().valueOf() - 30*24*60*60*1000).toLocaleString().split(',')[0]
		end = new Date().toLocaleString().split(',')[0];
	}
	// if viewType is 'monthly', reset to view this month
	if (viewTypeParam === "monthly") {
		start = new Date(new Date().valueOf() - ((new Date()).getDate()-1)*24*60*60*1000).toLocaleString().split(',')[0]
		end = new Date((new Date().getFullYear()), (new Date().getMonth())+1, 0).toLocaleString().split(',')[0];
	}
	// if viewType is 'all', reset to view all
	if (viewTypeParam != 'monthly' && viewTypeParam != 'thirty-day' && (viewTypeParam === "all" || 
		cookies.viewType === "all" || cookies.viewType === 'undefined') || !viewTypeParam) {
			start = '1/1/1900';
			end = new Date().toLocaleString().split(',')[0];
	}
	return [start, end];
}