import React, { useState } from 'react';
import PageHeader from './components/PageHeader';
import PromptForm from './components/PromptForm';
import ImageFrame from './components/ImageFrame';

const API_URL = 'https://imagine-this.vercel.app/openai/imagine';

function App() {
  const [imgUrl, setImgUrl] = useState();
  const [status, setStatus] = useState('initial');

  const requestImage = async (prompt) => {
    if (prompt.trim().length === 0) {
      setStatus('initial');
      return;
    }
    try {
      setStatus('loading');
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt }),
      });
      if (!response.ok) {
        throw new Error('Image could not be generated!');
      }
      const data = await response.json();
      setImgUrl(data.data);
      setStatus('ready');
    } catch (error) {
      setStatus('error');
      console.log(error);
    }
  };

  return (
    <div className="app">
      <PageHeader />
      <div className="container">
        <PromptForm requestImage={requestImage} />
        <ImageFrame imgUrl={imgUrl} status={status} />
      </div>
      <footer>
        <p>Copyright 2023 &copy; imaginethis.ai.com.mm</p>
        <p>Created using React & OpenAI API</p>
      </footer>
    </div>
  );
}

export default App;
