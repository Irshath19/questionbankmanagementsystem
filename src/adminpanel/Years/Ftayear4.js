import React, { useState } from 'react';
import axios from 'axios';
import Dropzone from 'react-dropzone';

const dropzoneStyles = {
  border: '2px dashed #0087F7',
  borderRadius: '4px',
  cursor: 'pointer',
  padding: '20px',
  textAlign: 'center',
};
function Ftayear4() {
  const [title, setTitle] = useState('');
  const [file, setFile] = useState(null);

  const handleDrop = (acceptedFiles) => {
    setFile(acceptedFiles[0]);
  };

  const handleUpload = async () => {
    try {
      if (!title) {
        alert('Title is required.');
        return;
      }

      const formData = new FormData();
      formData.append('pdf', file);
      formData.append('title', title);

      await axios.post('http://localhost:3001/ftyear4upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      alert('PDF uploaded successfully!');
    } catch (error) {
      console.error(error);
      alert('Error uploading PDF');
    }
  };

  return (
    <div>
      <h1>PDF Uploader</h1>
      <div>
        <label>Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <Dropzone onDrop={handleDrop}>
        {({ getRootProps, getInputProps }) => (
          <div {...getRootProps()} style={dropzoneStyles}>
            <input {...getInputProps()} />
            <p>Drag and drop a PDF file here, or click to select one</p>
          </div>
        )}
      </Dropzone>
      {file && (
        <div>
          <p>Selected File: {file.name}</p>
          <button onClick={handleUpload}>Upload PDF</button>
        </div>
      )}
    </div>
  );
}


export default Ftayear4;