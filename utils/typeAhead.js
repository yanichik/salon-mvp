module.export = {
	typeAhead(){
		console.log('hi');

		const {clientList} = require('../routes/ownerRoutes.js')

		const filterInput = document.getElementById('filter-input')
		const matchList = document.getElementById('match-list')
		console.log(filterInput);
		const searchClients = async searchText => {
			let clientListArr = {...clientList};
			console.log(clientListArr);
		}

		filterInput.addEventListener('keyup', ()=> searchClients(filterInput.value))
	}
}
// console.log('hi');
