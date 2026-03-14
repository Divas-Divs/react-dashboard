const apiKey = import.meta.env.VITE_TRIVIA_API_KEY;

export async function fetchTodaysTrivia() {
  try {
    const response = await fetch("https://api.api-ninjas.com/v1/triviaoftheday", {
    headers: { "X-Api-Key": apiKey }
  });

    if (!response.ok) {
      throw new Error("Trivia fetch failed: " + response.status);
    }

    const data = await response.json();

    return data[0];
  } catch (err) {
    console.error("Error fetching trivia of the day:", err);
    return null;
  }
}