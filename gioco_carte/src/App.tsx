import { useNavigate } from 'react-router';
import './App.css'

function App() {
  const navigator = useNavigate()
  function _startGame() {
      navigator('play')
  }
  return (
    <section className='main-content'>
        <h1 className="title">CardGame</h1>
        <button className='start-game' role="button" onClick={_startGame}>Play with Computer</button>
    </section>
  );
}

export default App
