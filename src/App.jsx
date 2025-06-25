import { useState } from 'react';
import { flashcardList } from './data.js';
import './App.css';

function App() {
  const [index, setIndex] = useState(0);
  const [showName, setShowName] = useState(false);
  const [answer, setAnswer] = useState('');
  const [correct, setCorrect] = useState(false)
  const [showcorrect, setShowCorrect] = useState(false)
  const [endOfArray, setEnd] = useState('left')
  const flashcard = flashcardList[index];

  function increaseIndex() {
    if (index < flashcardList.length - 1) {
      setIndex(index + 1);
      setEnd("")
    }
    index >= flashcardList.length - 2 ? setEnd("right") : setEnd("")
    setShowName(false);
  }

  function decreaseIndex() {
    if (index > 0) {
      setIndex(index - 1);
      setEnd("")
    }
    index <= 1 ? setEnd("left") : setEnd("")
    setShowName(false);
  }

  function revealName() {
    setShowName(!showName);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!showName){
      if(answer.trim().toLowerCase() == flashcard.name.trim().toLocaleLowerCase()){
        setCorrect(true)
        setShowCorrect(true)
      }
      else {
        setShowCorrect(true)
      }
    }
    setAnswer('');

    setTimeout(() => {
      setCorrect(false);
      setShowCorrect(false);
    }, 1000);
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
        <div>
          <form onSubmit={handleSubmit}>
            <input type="text" value={answer} onChange={(e) => setAnswer(e.target.value)} placeholder='Make your guess'/>
            <button className={showcorrect ? (correct ? 'correct' : 'wrong'): 'submit'}>{showcorrect ? (correct ? '✓' : '✕'): 'Submit'}</button>
          </form>
        </div>
        <div>
          <button className={endOfArray == 'left' ? 'left' : ''} onClick={decreaseIndex}>Previous Logo</button>
          <button className={endOfArray == 'right' ? 'right' : ''} onClick={increaseIndex}>Next Logo</button>
        </div>
      </div>
    </>
  );
}

export default App;


