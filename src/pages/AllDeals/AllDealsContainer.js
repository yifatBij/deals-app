import React, { useState, useEffect } from 'react';
import dealService from '../../services/dealService.js';
import AllDeals from './AllDeals'

const AllDealsContainer = () => {
  const [isLoading, setLoading] = useState(true)
  const [deals, setDeals] = useState([])
  const [tableHeaders, setTableHeaders] = useState([])

   useEffect(() => {
     async function getDeals() {
         const reponse = await dealService.getDeals();
         const { deals, tableHeaders} = reponse.data
         setLoading(false)
         setDeals(deals);
         setTableHeaders(tableHeaders)

     }
     getDeals();
  }, [])

   if(isLoading){
      return 'AllDeals - loading...'
    }else{
      
    return <AllDeals tableHeaders={tableHeaders} data={deals}/>
  }
 }

 export default AllDealsContainer;