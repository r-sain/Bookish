import axios from 'axios';

const API_KEY = 'AIzaSyCIC7KxqcQ4QszeeiFvAJmTdVzJ1ZmQAvo';

export const fetchBooks = (query, maxResults) => {
  const API_URL = `https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=${maxResults}&key=${API_KEY}`;

  return axios
    .get(API_URL)
    .then(response => response.data.items)
    .catch(error => {
      console.error('Error fetching data:', error);
      return [];
    });
};

export const shuffleArray = array => {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
};
