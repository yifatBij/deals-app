import axios from 'axios'

const proxyurl = "https://cors-anywhere.herokuapp.com/";
const REIGO_ORIGIN = 'https://reigo-staging-dot-reigo-inv.appspot.com'
axios.defaults.baseURL = `${proxyurl}${REIGO_ORIGIN}/reigo`;


const dealService = {
	createNewDeal: (data) => {
		return axios.post('dealsInputs', data)
	},

	getDeals: () => { 
		return axios.get('dealsInputs', {
			transformResponse:[(data)=> {
				const deals = JSON.parse(data).body
				const tableHeaders = Object.keys(deals[0])
				return {tableHeaders, deals};
		}]})
	}
}

export default dealService