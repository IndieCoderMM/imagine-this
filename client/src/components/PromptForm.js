import React, { useRef } from 'react';

export default function PromptForm({ requestImage }) {
  const promptRef = useRef();

  const submitForm = (e) => {
    e.preventDefault();
    const prompt = promptRef.current.value;
    requestImage(prompt);
  };

  return (
    <form className="promptForm">
      <h2>A.I. Image Generator</h2>
      <p>
        Describe your imagination in prompt and AI will draw an image for you.
      </p>
      <small>example: a dog riding a rocket in space</small>
      <input
        ref={promptRef}
        className="promptInput"
        type="text"
        placeholder="Write prompt for image"
        maxLength={100}
      />
      <button className="generateBtn" type="submit" onClick={submitForm}>
        Generate
      </button>
    </form>
  );
}
