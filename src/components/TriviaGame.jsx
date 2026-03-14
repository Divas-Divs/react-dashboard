import { useEffect, useState } from "react";
import { fetchTodaysTrivia } from "../api/triviaApi";

export default function TriviaGame() {
  const [trivia, setTrivia] = useState(null);

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
      <p>{trivia.question}</p>

      <p className="trivia-answer">{trivia.answer}</p>
    </div>
  );
}
