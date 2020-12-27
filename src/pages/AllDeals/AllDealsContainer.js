import React, { useState, useEffect } from 'react';
import dealService from '../../services/dealService.js';
import AllDeals from './AllDeals'

const AllDealsContainer = () => {
  const [isLoading, setLoading] = useState(true)
  const [deals, setDeals] = useState([])
  const [error, setError] = useState()
  const [tableHeaders, setTableHeaders] = useState([])

   useEffect(() => {
         dealService.getDeals().then(({data}) =>{
          const { deals, tableHeaders} = data;
          setLoading(false)
          setDeals(deals);
          setTableHeaders(tableHeaders)
         }, (error) => {
          setLoading(false)
          setError(error.toString())
         })
     }, [])

   if(isLoading){
      return 'AllDeals - loading...'
   }else if(error){
      return error
   }else{
    return <AllDeals tableHeaders={tableHeaders} data={deals}/>
  }
 }

 export default AllDealsContainer;