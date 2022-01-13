import './App.scss';
import React from 'react';
import { Searchbar } from './components/Searchbar/Searchbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ImageGallery } from './components/ImageGallery/ImageGallery';
import { useState, useEffect } from 'react';

// key = 0e4aaee08aabcf1cd893aec1f6e895b9

function App() {
  const [modalContent, setModalContent] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [page, setPage] = useState(1);

  const handleSubmit = imgQuery => {
    setSearchQuery(imgQuery);
  };

  return (
    <div className="App">
      <Searchbar onSubmit={handleSubmit} />
      <ToastContainer />
      <ImageGallery value={searchQuery} />
    </div>
  );
}

export default App;
