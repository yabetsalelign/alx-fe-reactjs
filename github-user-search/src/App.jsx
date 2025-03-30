import React, { useState } from 'react';
import fetchGitHubUser from './services/githubService'; // Import the service

function App() {
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState(null);

  const handleSearch = async () => {
    try {
      const data = await fetchGitHubUser(username);
      setUserData(data); // Store the fetched data
    } catch (error) {
      console.error('Error fetching user data', error);
    }
  };

  return (
    <div>
      <h1>GitHub User Search</h1>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter GitHub username"
      />
      <button onClick={handleSearch}>Search</button>

      {userData && (
        <div>
          <h2>{userData.name}</h2>
          <p>{userData.bio}</p>
          <a href={userData.html_url} target="_blank" rel="noreferrer">
            View Profile
          </a>
        </div>
      )}
    </div>
  );
}

export default App;
