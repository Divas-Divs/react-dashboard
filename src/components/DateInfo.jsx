import { useEffect, useState } from "react";
import { getCurrentDateTime } from "../api/timeApi";

export default function DateInfo() {
  const [dateInfo, setDateInfo] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadTime() {
      try {
        const data = await getCurrentDateTime();
        setDateInfo(data);
      } catch (err) {
        console.error(err);
        setError("Could not load date info");
      }
    }

    loadTime();
  }, []);

  if (error) return <p>{error}</p>;
  if (!dateInfo) return <p>Loading date...</p>;

  const date = new Date(dateInfo.dateTime);

  const formattedDate = date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric"
  });

  const formattedTime = date.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit"
  });

  return (
    <div className="fact-box">
      <h3>Today</h3>
      <p>{formattedDate}</p>
      <p>{formattedTime}</p>
      <p>{dateInfo.dayOfWeek}</p>
    </div>
  );
}