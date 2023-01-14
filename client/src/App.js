import React, { useEffect, useState } from 'react';
import PageHeader from './components/PageHeader';
import PromptForm from './components/PromptForm';
import ImageFrame from './components/ImageFrame';

function App() {
  const [imgUrl, setImgUrl] = useState();

  const requestImage = async (prompt) => {
    try {
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
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='app'>
      <PageHeader />
      <PromptForm requestImage={requestImage} />
      <ImageFrame imgUrl={imgUrl} />
    </div>
  );
}

export default App;
