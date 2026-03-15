import { useEffect, useState } from "react";
import { fetchTodaysTrivia } from "../api/triviaApi";

export default function TriviaGame() {
  const [trivia, setTrivia] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);

  useEffect(() => {
    async function loadTrivia() {
      const result = await fetchTodaysTrivia();
      setTrivia(result);
    }
    loadTrivia();
  }, []);

  if (!trivia) return <p>Loading today's trivia…</p>;

  return (
    <div className="fact-box">
      <h3>Trivia of the Day</h3>
      <p className="trivia-question">{trivia.question}</p>

      <button className="trivia-answer" onClick={() => setShowAnswer(true)}>
        {showAnswer ? trivia.answer : 'Click to reveal answer'}
      </button>
    </div>
  );
}
