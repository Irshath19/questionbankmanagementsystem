import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Cyberyear1() {
  const [pdfs, setPdfs] = useState([]);

  useEffect(() => {
    const fetchPdfs = async () => {
      try {
        const response = await axios.get('http://localhost:3001/getcyberPdfs1');
        setPdfs(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPdfs();
  }, []);

  const downloadPdf = (pdf) => {
    const blob = new Blob([pdf.data], { type: 'application/pdf' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = pdf.name;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div>
      <h1>PDF List</h1>
      <div style={containerStyles}>
        {pdfs.map((pdf) => (
          <div key={pdf._id} style={pdfContainerStyles}>
            <h3>{pdf.title}</h3>
            <button onClick={() => downloadPdf(pdf)}>Download PDF</button>
          </div>
        ))}
      </div>
    </div>
  );
}

const containerStyles = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '20px',
};

const pdfContainerStyles = {
  border: '1px solid #ccc',
  padding: '10px',
  borderRadius: '5px',
};

export default Cyberyear1;
