import React, { useEffect, useState } from 'react';
import PageHeader from './components/PageHeader';
import PromptForm from './components/PromptForm';
import ImageFrame from './components/ImageFrame';

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
      const response = await fetch('/openai/imagine', {
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
      console.log(data);
      setImgUrl(data.data);
      setStatus('ready');
    } catch (error) {
      setStatus('error');
      console.log(error);
    }
  };

  return (
    <div className='app'>
      <PageHeader />
      <div className='container'>
        <PromptForm requestImage={requestImage} />
        <ImageFrame imgUrl={imgUrl} status={status} />
      </div>
      <footer>
        <p>
          2023 &copy; imaginethis.ai.com powered by{' '}
          <a href='https://beta.openai.com/docs/guides/images'>OpenAI API</a>
        </p>
      </footer>
    </div>
  );
}

export default App;
