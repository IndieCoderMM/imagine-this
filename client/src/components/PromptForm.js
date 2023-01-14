import React, { useRef } from 'react';

export default function PromptForm({ requestImage }) {
  const promptRef = useRef();

  const submitForm = (e) => {
    e.preventDefault();
    const prompt = promptRef.current.value;
    if (prompt.trim().length === 0) {
      return;
    }
    console.log(prompt);
    requestImage(prompt);
  };

  return (
    <form className='promptForm'>
      <input
        ref={promptRef}
        className='promptInput'
        type='text'
        placeholder='Write prompt for image'
        maxLength={100}
        required
      />
      <button className='generateBtn' type='submit' onClick={submitForm}>
        Generate
      </button>
    </form>
  );
}
