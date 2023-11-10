import React, { useState } from "react";

function CopyLinks({ url }) {
  const [isCopied, setIsCopied] = useState(false);
  const [inputValue, setInputValue] = useState(url);

  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(inputValue)
      .then(() => {
        setIsCopied(true);
      })
      .catch((error) => {
        console.error("Failed to copy text: ", error);
      });
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <>
      <div className="copy-section">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange} 
        />
        <button onClick={copyToClipboard}>
          <i className="ri-file-copy-line"></i>
        </button>
      </div>
      {isCopied && (
        <span className="mt-2 text-success success_text">Copied to clipboard!</span>
      )}
    </>
  );
}

export default CopyLinks;
