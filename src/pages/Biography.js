import React, { useState, useEffect } from 'react';

function Biography() {
  const textLines = [
    "I'm Mohamed Kaba, an aspiring Software Developer and customer advocate",
    "Here is a little bit about my journey...",
    "Dedicated and Innovative full stack Developer with a passion for Technology",
    "and Customer success. Selfless, customer-centric and skilled in",
    "communication with fluency in 4 languages. Proven leadership skills,",
    "detail-oriented, highly organized, and disciplined individual evidenced",
    "by a military background. Committed to delivering outstanding programs and",
    "to establishing, growing and maintaining relationships, increasing",
    "profitability and driving results with a proven track record of achieving",
    "favorable outcomes for clients."
  ];

  const [displayedLines, setDisplayedLines] = useState([]);

  useEffect(() => {
    let currentLine = 0;
    const interval = setInterval(() => {
      if (currentLine < textLines.length) {
        setDisplayedLines((prevLines) => [...prevLines, textLines[currentLine]]);
        currentLine += 1;
      } else {
        clearInterval(interval); // Stop the interval when all lines are displayed
      }
    }, 10); // Adjust delay time (in ms) between lines

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  return (
    <div className="biography">
      <h1>About Me</h1>
      {/* Add image here */}
      <div className="image-container">
        <img
          src="./images/headshot.JPG"
          alt="Mohamed Kaba"
          className="biography-image"
        />
      </div>
      <p>
        {displayedLines.map((line, index) => (
          <span
            key={index}
            className="typing-line"
            style={{
              animationDelay: `${index * 2}s`, // Adjust delay based on line index
            }}
          >
            {line}
          </span>
        ))}
      </p>
    </div>
  );
}

export default Biography;
