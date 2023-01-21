import React, { useState } from 'react';
import Spinner from './Spinner';
import PainterImg from '../painterImage.png';

function ImageFrame({ imgUrl, status }) {
  return (
    <div className="imageFrame">
      {status === 'loading' ? <Spinner /> : null}
      {status === 'error' ? (
        <div className="error-box">
          <h2>🙁ops!</h2>
          <p>Image could not be generated!</p>
        </div>
      ) : null}
      {status === 'ready' ? (
        <img src={imgUrl} alt="generated from prompt" className="picture" />
      ) : null}
      {status === 'initial' ? (
        <img
          className="picture"
          src={PainterImg}
          alt="design by pikisuperstar on Freepik"
        />
      ) : null}
    </div>
  );
}

export default ImageFrame;
