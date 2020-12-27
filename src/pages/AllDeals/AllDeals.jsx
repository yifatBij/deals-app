import Linkify from 'react-linkify';
import './AllDeals.css'


const AllDeals = ({tableHeaders, data}) => {

   const columnClass = (key, val) => {
    if(key.includes('Address')){
      return 'address';
    }

    if(!isNaN(val) && !key.includes('zipCode')){
      return 'number';
    }
   }


   const renderRowData = (deal, index) => {
    return tableHeaders.map((key) => <td key={`${key}${index}`} className={columnClass(key, deal[key])}><Linkify properties={{target: '_blank'}}>{ deal[key] }</Linkify></td>)
   }

   const renderTableData = (deals)=>{
    return deals.map((deal, index) => {
      return <tr key={index}>{renderRowData(deal, index)}</tr>
      })
    }


    return (
            <table>
              <thead>
                <tr>{tableHeaders.map((h, i) => <th key={i}>{h}</th>)}</tr>
              </thead>
              <tbody>
                { renderTableData(data) }
              </tbody>
            </table>
    )
}

export default AllDeals;