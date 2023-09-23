
import Sidebar from '../components/Sidebar'
import "./Summary.css"
import React, { useState } from 'react';
import axios from 'axios';

const Summary = () => {
    const [originalText, setOriginalText] = useState('');
    const [summary, setSummary] = useState('');
    const [isLoading, setIsLoading] = useState(false);
  
    const handleSummarize = async () => {
      setIsLoading(true);
  
      const options = {
        method: 'POST',
        url: 'https://extractoapi.p.rapidapi.com/summarize',
        headers: {
          'content-type': 'application/json',
          'X-RapidAPI-Key': '2e73cdcb16msh70618548fca142cp1efad3jsn9e454aa3715f',
          'X-RapidAPI-Host': 'extractoapi.p.rapidapi.com',
        },
        data: {
          styleArgs: {
            tone: 'concise, professional and confident.',
            format: 'bulleted list',
          },
          text: originalText,
        },
      };
  
      try {
        const response = await axios.request(options);
        setSummary(JSON.stringify(response.data.output));

      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };
  return (
    <div className='d-flex'>
        <Sidebar />
        <div className='content'>
        <h2>Summarizer AI</h2>
        <h2>Text Summarization Bot</h2>
      <textarea
        rows="5"
        cols="50"
        placeholder="Enter text to summarize..."
        value={originalText}
        onChange={(e) => setOriginalText(e.target.value)}
        className='text-area'
      ></textarea>
      <br />
      <button onClick={handleSummarize} disabled={isLoading} className='btnx'>
        {isLoading ? 'Summarizing...' : 'Summarize'}
      </button>
      <div>
        <h3>Summary:</h3>
        <p>{summary}</p>
      </div>
        </div>
       
    </div>
  )
}

export default Summary