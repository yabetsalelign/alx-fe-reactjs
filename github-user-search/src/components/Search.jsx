import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService'; // Adjust the path as necessary

const Search = () => {
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState(''); // State for location
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    setLoading(true);
    const data = await fetchUserData(username, location); // Pass location to fetch function
    setUsers(data);
    setLoading(false);
  };

  return (
    <div>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter GitHub username"
      />
      <input
        type="text"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        placeholder="Enter location" // Location input
      />
      <button onClick={handleSearch}>Search</button>

      {loading && <p>Loading...</p>}
      
      {users.length > 0 ? (
        users.map(user => (
          <div key={user.login} className="border p-4 my-2">
            <img src={user.avatar_url} alt={user.login} className="w-12 h-12" />
            <h2 className="text-xl">{user.login}</h2>
            <p>Location: {user.location || 'N/A'}</p> {/* Display location */}
            <a href={user.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-500">
              View Profile
            </a>
          </div>
        ))
      ) : (
        !loading && <p>Looks like we can't find the user.</p>
      )}
    </div>
  );
};

export default Search;
