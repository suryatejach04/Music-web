import React, { useState, useEffect } from 'react';

function Favorites() {
  const [favoriteSongs, setFavoriteSongs] = useState([]);

  useEffect(() => {
    // Fetch favorite songs from an API or database
    // Example:
    fetch('/api/favorites')
      .then(response => response.json())
      .then(data => setFavoriteSongs(data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div className='w-100'>
      <h2 className='text-light'>Favorite Songs</h2>
      <ul>
        {favoriteSongs.map((song, index) => (
          <li key={index}>
            <span>{song.title}</span>
            <span>{song.artist}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Favorites;
