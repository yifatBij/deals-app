import axios from 'axios'
import dealsData from './allDeals.json'

const proxyurl = "https://cors-anywhere.herokuapp.com/";
const REIGO_ORIGIN = 'https://reigo-staging-dot-reigo-inv.appspot.com'
axios.defaults.baseURL = `${proxyurl}${REIGO_ORIGIN}/reigo`;


const dealService = {
	createNewDeal: (data) => {
		return axios.post('dealsInputs', data)
	},

	getDeals: () => { 
		// return axios.get('https://reigo-staging-dot-reigo-inv.appspot.com/swagger-ui.html#/deal-input-controller/getDealsInputUsingGET', {
		// 	transformResponse:[(data)=> {
		// 		const deals = JSON.parse(data).body
		// 		const tableHeaders = Object.keys(deals[0])
		// 		return {tableHeaders, deals};
		// }]})
		// {body: deals} = dealsData;
		return Promise.resolve({data: {deals: dealsData["body"], tableHeaders: Object.keys(dealsData["body"][0])}})
	}
}

export default dealService