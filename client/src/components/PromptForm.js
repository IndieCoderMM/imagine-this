import React from 'react';

export default function PromptForm() {
  return (
    <form className='promptForm'>
      <input
        className='promptInput'
        type='text'
        placeholder='Write prompt for image'
        maxLength={100}
        required
      ></input>
      <button className='generateBtn' type='submit'>
        Generate
      </button>
    </form>
  );
}
