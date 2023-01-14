import React from 'react';

function Spinner() {
  return (
    <>
      <div className='lds-ring'>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <p>Generating image...</p>
    </>
  );
}

export default Spinner;
