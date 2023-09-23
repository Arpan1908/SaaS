import React, { useState } from 'react';
import Sidebar from '../components/Sidebar'
import "./Para.css"

import axios from 'axios';

const Para = () => {

    const [originalText, setOriginalText] = useState('');
    const [paraphrasedText, setParaphrasedText] = useState('');
  
    const handleParaphrase = async () => {
      const options = {
        method: 'POST',
        url: 'https://paraphrase-genius.p.rapidapi.com/dev/paraphrase/',
        headers: {
          'content-type': 'application/json',
          'X-RapidAPI-Key': '2e73cdcb16msh70618548fca142cp1efad3jsn9e454aa3715f',
          'X-RapidAPI-Host': 'paraphrase-genius.p.rapidapi.com',
        },
        data: {
          text: originalText,
          result_type: 'multiple',
        },
      };
  
      try {
        const response = await axios.request(options);
        setParaphrasedText(response.data); // Assuming the response directly contains the paraphrased text
      } catch (error) {
        console.error(error);
      }
    };

  return (
    <div className="d-flex">
    <Sidebar/>
    <div className="content">
    <h2>Paraphrase Text</h2>
      <textarea
        rows="5"
        cols="50"
        placeholder="Enter text to paraphrase..."
        value={originalText}
        onChange={(e) => setOriginalText(e.target.value)}
        className="text-area"
      ></textarea>
      <br />
      <button onClick={handleParaphrase} className='btnx'>Paraphrase</button>
      <div className='para'>
        <h3>Paraphrased Text:</h3>
        
           <p>{paraphrasedText}</p>
        
      </div>
</div>
    </div>
    
  )
}

export default Para