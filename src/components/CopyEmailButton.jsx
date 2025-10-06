// src/components/CopyEmailButton.jsx

import { useState } from 'react';

// 🚨 Your email address is defined here 🚨
const EMAIL_ADDRESS = "ritikabashak44@gmail.com"; 

const CopyEmailButton = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    // 1. Copy the email to the clipboard
    navigator.clipboard.writeText(EMAIL_ADDRESS)
      .then(() => {
        // 2. Set the state to 'copied' to update the button text
        setCopied(true);
        
        // 3. Reset the button text back to 'Copy Email' after 2 seconds
        setTimeout(() => setCopied(false), 2000);
      })
      .catch(err => {
        // Handle error if clipboard access is denied
        console.error('Failed to copy text: ', err);
        // Optional: show a user-friendly error message
      });
  };

  return (
    <button
      onClick={handleCopy}
      // Assuming your original button styles were something like this
      className="bg-white text-indigo-800 font-bold py-2 px-4 rounded-full shadow-lg hover:bg-gray-100 transition-colors" 
    >
      {/* Button text changes based on the 'copied' state */}
      {copied ? "Email Copied! ✅" : "Copy Email"}
    </button>
  );
};

export default CopyEmailButton;