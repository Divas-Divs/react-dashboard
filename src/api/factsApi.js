const FACT_API_URL = 'https://uselessfacts.jsph.pl/api/v2/facts/';

export async function getTodayFact() {
    try {
        const response = await fetch(`${FACT_API_URL}today?language=en`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Failed to fetch today\'s fact:', error);
        throw error;
    }
}