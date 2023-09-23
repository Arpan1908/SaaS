import React, { useState } from 'react';
import axios from 'axios';
import "./Summary.css"
import Sidebar from '../components/Sidebar';

function Qrgenerator() {
  const [qrCodeUrl, setQRCodeUrl] = useState('');
  const [inputText, setInputText] = useState(''); // State to store user input
  const [isLoading, setIsLoading] = useState(false);

  const generateQRCode = async () => {
   
    setIsLoading(true);

    const options = {
      method: 'GET',
      url: 'https://qrcodeutils.p.rapidapi.com/qrcodefree',
      params: {
        text: inputText, // Use the user's input for QR code generation
        validate: 'true',
        size: '150',
        type: 'svg',
        level: 'M',
      },
      headers: {
        'X-RapidAPI-Key': '2e73cdcb16msh70618548fca142cp1efad3jsn9e454aa3715f',
        'X-RapidAPI-Host': 'qrcodeutils.p.rapidapi.com',
      },
    };

    try {
      const response = await axios.request(options);
      setQRCodeUrl(response.data.url);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className='d-flex'>
        <Sidebar />
       
    <div className="content">
      <h2>QR Code Generator</h2>
      <input
      rows="5"
      cols="50"
        type="text"
        placeholder="Enter text for QR code..."
        value={inputText}
        onChange={(e) => setInputText(e.target.value)} // Update inputText state
        className="text-area"
      />
      <button className="btnx" onClick={generateQRCode} disabled={isLoading}>
        {isLoading ? 'Generating QR Code...' : 'Generate QR Code'}
      </button>
      {qrCodeUrl && (
        <div>
          <h3>QR Code:</h3>
          <img src={qrCodeUrl} alt="QR Code" />
        </div>
      )}
    </div>
    </div>
  );
}

export default Qrgenerator;
