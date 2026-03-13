import { useEffect, useState } from "react";
import { getTodayFact } from "../api/factsApi";

export default function Facts() {
  const [fact, setFact] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadFact() {
      try {
        const data = await getTodayFact();
        setFact(data.text);
      } catch (err) {
        console.error(err);
        setError("Could not load today's fact");
      }
    }

    loadFact();
  }, []);

  if (error) return <p>{error}</p>;
  if (!fact) return <p>Loading fact...</p>;

  return (
    <div>
      <h2>Today's fun fact: {fact}</h2>
    </div>
  );
}