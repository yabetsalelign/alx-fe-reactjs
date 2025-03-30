import axios from 'axios';

const fetchAdvancedUserData = async (username, location, minRepos) => {
  let query = '';
  if (username) query += `${username}+`;
  if (location) query += `location:${location}+`;
  if (minRepos) query += `repos:>${minRepos}`;

  const apiUrl = `https://api.github.com/search/users?q=${query.trim()}`;

  try {
    const response = await axios.get(apiUrl);
    return response.data; // Return the user data
  } catch (error) {
    console.error('Error fetching GitHub users:', error);
    throw error;
  }
};

export default fetchAdvancedUserData;
