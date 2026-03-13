import { useEffect, useState } from "react";
import { fetchTrivia } from "../api/triviaApi";

export default function TriviaGame() {
  const [questions, setQuestions] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadTrivia() {
      try {
        const data = await fetchTrivia();
        setQuestions(data);
      } catch (err) {
        console.error(err);
        setError("Could not load trivia questions");
      }
    }

    loadTrivia();
  }, []);

  return (
    <div className="fact-box">
      <h3>Trivia</h3>
      {error && <p style={{color: 'red'}}>{error}</p>}
      {questions.length === 0 ? (
        <p>Loading trivia...</p>
      ) : (
        questions.map((q, index) => (
          <div key={index}>
            <p>{q.question}</p>
            <ul>
              {[...q.incorrect_answers, q.correct_answer]
                .sort()
                .map((answer, i) => (
                  <li key={i}>{answer}</li>
                ))}
            </ul>
          </div>
        ))
      )}
    </div>
  );
}