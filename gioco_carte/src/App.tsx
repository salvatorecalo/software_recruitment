import { useNavigate } from 'react-router';
import './App.css'
import { deckStore } from './stores/deckStore/deckStore';

function App() {
  const navigator = useNavigate()
  const {generateDeck} = deckStore()
  function _startGame() {
      navigator('play')
      generateDeck()

  }
  return (
    <section className='main-content'>
        <h1 className="title">CardGame</h1>
        <button className='start-game' role="button" onClick={_startGame}>Play with Computer</button>
    </section>
  );
}

export default App
