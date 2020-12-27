import React, { useState } from 'react';
import JSONInput from 'react-json-editor-ajrm';
import locale    from 'react-json-editor-ajrm/locale/en';
import JSONPretty from 'react-json-pretty';

import dealService from '../../services/dealService.js';
import { NEW_DEAL_SAMPLE } from '../consts';

import 'react-json-pretty/themes/monikai.css';
import './NewDeal.css';


const NewDeal = () => {
  const [disabled, setDisabled] = useState(true);
  const [uploadData, setUploadData] = useState();
  const [result, setResult] = useState('');
  const [submitText, setSubmitText] = useState('Lets Create');

  const jsonChanged = ({error, jsObject}) => { 
    setDisabled(!!error)
    setUploadData(jsObject)
   }

   const postData = () => {
    setDisabled(true);
    setResult();
    setSubmitText('processing...')
      dealService.createNewDeal(uploadData).then(response => {
        setResult(response)
        setSubmitText('Lets Create')
      }, (error) => {
        setResult(error)
        setSubmitText('Lets Create')
})
   }

  return (
    <div className="rowC">
        <JSONInput 
          placeholder = { NEW_DEAL_SAMPLE }
          onChange    = { jsonChanged }
          locale      = { locale }
          height      = '550px'
        />
    <button className="submit" disabled = { disabled } onClick = { postData }> {submitText}</button>
    <JSONPretty data={result}/>
    </div>
  );
}

export default NewDeal;
