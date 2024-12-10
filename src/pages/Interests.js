import React, { useState } from 'react';

function Interests() {
  // Content for each interest
  const content = {
    programming: {
      img: `${process.env.PUBLIC_URL}/images/coding.png`, // Corrected path
      text: 'I have a deep passion for coding and tackling complex problems. Programming gives me the tools to transform my ideas into reality, allowing me to create innovative solutions and continuously learn new skills. It\'s not just a career for me, but a way to express my creativity and challenge myself every day.'
    },
    music: {
      img: `${process.env.PUBLIC_URL}/images/music.png`, // Corrected path
      text: 'Music is a huge part of my life. It helps me relax and also serves as an outlet for creativity.'
    },
    videogames: {
      img: `${process.env.PUBLIC_URL}/images/videogames.png`, // Corrected path
      text: 'Video games are a passion of mine, as they combine storytelling, strategy, and entertainment.'
    }
  };

  const [droppedContent, setDroppedContent] = useState(null);  // To store the dropped or clicked interest content
  const [isOn, setIsOn] = useState(true);  // For the TV screen on/off state

  // Handle the drop event
  const handleDrop = (event) => {
    event.preventDefault();
    const interest = event.dataTransfer.getData('interest');  // Get the dragged interest
    setDroppedContent(content[interest]);  // Set content based on the dropped interest
  };

  // Allow the drop event
  const handleDragOver = (event) => {
    event.preventDefault();  // Allow dropping by preventing the default action
  };

  // Handle click event on interest items
  const handleClick = (interest) => {
    setDroppedContent(content[interest]);  // Set content based on the clicked interest
  };

  // Toggle TV On/Off
  const toggleTV = () => {
    setIsOn(!isOn);
  };

  return (
    <div className="interests">
      <h1>My Interests</h1>
      <p>Click or drag an interest to the container below to reveal more details.</p>

      {/* Draggable Interest Items */}
      <div className="interest-items">
        <div
          className="interest"
          draggable
          onDragStart={(e) => e.dataTransfer.setData('interest', 'programming')}
          onClick={() => handleClick('programming')}  // Handle click to show content
        >
          Programming
        </div>
        <div
          className="interest"
          draggable
          onDragStart={(e) => e.dataTransfer.setData('interest', 'music')}
          onClick={() => handleClick('music')}  // Handle click to show content
        >
          Music
        </div>
        <div
          className="interest"
          draggable
          onDragStart={(e) => e.dataTransfer.setData('interest', 'videogames')}
          onClick={() => handleClick('videogames')}  // Handle click to show content
        >
          Video Games
        </div>
      </div>

      {/* Droppable Container styled as a TV screen */}
      <div
        className="drop-container"
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      >
        {isOn && droppedContent ? (
          <div className="content">
            <img src={droppedContent.img} alt="Interest" />
            <p>{droppedContent.text}</p>
          </div>
        ) : (
          <p style={{ color: '#fff' }}>Drag or click an interest here to see the details.</p>
        )}
      </div>

      {/* TV Buttons (On/Off) */}
      <div className="tv-buttons">
        <div
          className={`tv-button ${isOn ? 'tv-button-on' : 'tv-button-off'}`}
          onClick={toggleTV}
        >
          {isOn ? 'On' : 'Off'}
        </div>
      </div>
    </div>
  );
}

export default Interests;
