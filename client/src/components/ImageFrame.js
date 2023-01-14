import React from 'react';

function ImageFrame({ imgUrl, imgCaption }) {
  return (
    <div className='imageFrame'>
      {imgUrl ? <img src={imgUrl} className='resultImg' /> : null}
      <p className='imgCaption'>{imgCaption || 'Generate your imagination!'}</p>
    </div>
  );
}

export default ImageFrame;
