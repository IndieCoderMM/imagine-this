import React, { useState } from 'react';
import PageHeader from './components/PageHeader';
import PromptForm from './components/PromptForm';
import ImageFrame from './components/ImageFrame';

const API_URL = 'https://imaginethis-server.onrender.com/openai/imagine';

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
      console.log('Sorry! Free OpenAI Key is not working anymore.');
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
        <p>
          <strong>Note:</strong>This app cannot generate images at the moment,
          I'm working on resolving the issue and will update the app as soon as
          possible.
        </p>
        <br />
        <p>Copyright 2023 &copy; imaginethis.ai.com.mm</p>
        <p>Created using React & OpenAI API</p>
      </footer>
    </div>
  );
}

export default App;
