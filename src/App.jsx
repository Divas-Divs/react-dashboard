import TriviaGame from "./components/TriviaGame";
import DateInfo from "./components/DateInfo";
import Facts from "./components/Facts";
import './App.css'
import logo from './assets/trivia-diva-logo.png'

function App() {
  return (
    <>
      <h1 style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
  <img src={logo} alt="" style={{ height: '1em', width: 'auto' }} />
  Trivia Diva
</h1>
      <Facts />
      <div className="fact-container">
        <DateInfo />
        <TriviaGame />
      </div>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App
