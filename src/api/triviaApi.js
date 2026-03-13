const TRIVIA_API_URL_BASE = 'https://opentdb.com/api.php'

function getCategoryForToday(){
    const day = new Date().getDay();

    const categoriesByDay = {
        0: 15, //Sunday - Video Games
        1: 20, // Monday - Mythology
        2: 17, // Tuesday - Science
        3: 23, // Wednesday - History
        4: 21, // Thursday - Sports
        5: 27, // Friday - Animals
        6: 26  // Saturday - Celebrities
    }

    return categoriesByDay[day];
}

export async function fetchTrivia() {
    const category = getCategoryForToday();
    
    try {
        const response = await fetch(
        `${TRIVIA_API_URL_BASE}?amount=5&category=${category}`
        );
        const data = await response.json();
        return data.results;
    } catch (error) {
        console.error("Failed to fetch trivia:", error);
        throw error;
    }
 
}