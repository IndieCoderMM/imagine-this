import React, { useState } from 'react';
import Spinner from './Spinner';
import PainterImg from '../painterImage.png';

function ImageFrame({ imgUrl, status }) {
  return (
    <div className='imageFrame'>
      {status === 'loading' && <Spinner />}
      {status === 'error' && (
        <div className='error-box'>
          <h2>🙁ops!</h2>
          <p>Image could not be generated!</p>
        </div>
      )}
      {status === 'ready' && (
        <img src={imgUrl} alt='generated from prompt' className='picture' />
      )}
      {status === 'initial' && (
        <img
          className='picture'
          src={PainterImg}
          alt='design by pikisuperstar on Freepik'
        />
      )}
    </div>
  );
}

export default ImageFrame;
