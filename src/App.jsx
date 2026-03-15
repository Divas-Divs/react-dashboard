import TriviaGame from "./components/TriviaGame";
import DateInfo from "./components/DateInfo";
import Facts from "./components/Facts";
import './App.css'

function App() {
  return (
    <>
      <h1>Trivia Diva</h1>
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
