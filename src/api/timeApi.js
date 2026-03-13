const TIME_API_URL = 'https://timeapi.io/api/Time/current/zone?timeZone=America/New_York'

export async function getCurrentDateTime(){
    try {
    const response = await fetch(TIME_API_URL);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch date/time:", error);
    throw error;
  }
}