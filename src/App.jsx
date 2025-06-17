import { useState } from 'react';
import { flashcardList } from './data.js';
import './App.css';

function App() {
  const [index, setIndex] = useState(0);
  const [showName, setShowName] = useState(false);
  const flashcard = flashcardList[index];

  function updateIndex() {
    if (index < flashcardList.length - 1) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
    setShowName(false);
  }

  function revealName() {
    setShowName(!showName);
  }

  return (
    <>
      <div className="main-container">
        <div>
          <h1>Soccer Logos Challenge</h1>
          <h3>Let's test how many soccer logos you know!</h3>
          <p>Number of Logos: {flashcardList.length}</p>
        </div>

        <div className="flashcard-container" onClick={revealName}>
          <div className={`flashcard ${showName ? 'flipped' : ''}`}>
            <div className="flashcard-front">
              <img className="logo" src={flashcard.image} alt="soccer logo" />
            </div>
            <div className="flashcard-back">
              <h2 className="team-name">{flashcard.name}</h2>
            </div>
          </div>
        </div>

        <button onClick={updateIndex}>Next Logo</button>
      </div>
    </>
  );
}

export default App;
