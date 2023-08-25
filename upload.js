import React, { useState } from "react";
import Button from './button';
import './upload.css'
import SearchBar from './search';


function Upload() {
    const [searchResults, setSearchResults] = useState([]);
  
    const handleSearchSubmit = (query) => {
      // Call your backend API with the search query and update the searchResults state
      setSearchResults(/* results from backend API */);
    }
    return (
        <div className="bg">
            <h1>Upload your own Podcasts!!</h1>
            {/* <div>
                <SearchBar onSubmit={handleSearchSubmit} />
                {Display the search results}
            </div> */}
            <form className='main'>
                <div className="form-group">
                    <label className="form-label" style={{ width: '50%' }}>Name of the podcast:</label>
                    <input className="form-control" style={{ width: '30%', padding: '5px' }} type="text" name="name" />
                </div><br></br>
                <div className="form-group">
                    <label className="form-label" style={{ padding: '5px' }}>Description of the podcast:</label>
                    <textarea className="form-control" style={{ width: '30%', padding: '5px' }} rows="2" name="message"></textarea>
                </div><br></br>
                <div className="form-group">
                    <label className="form-label" style={{ padding: '5px' }}>Category of the podcast(Audio/Video):</label>
                    <input className="form-control" style={{ width: '30%', padding: '5px' }} type="text" name="name" />
                </div><br></br>
                <div className="form-group">
                    <label className="form-label" style={{ padding: '5px' }}>Details of the speaker:</label>
                    <textarea className="form-control" style={{ width: '30%', padding: '5px' }} rows="1" name="message"></textarea>
                </div><br></br>
                <div className="form-group">
                    <label className="form-label" style={{ padding: '5px' }}>Upload your podcast:</label>
                    <input className="form-control" style={{ width: '30%', padding: '5px' }} type="file" name="name" />
                </div><br></br>
                <div className="form-group">
                    <Button text="Upload to Rock!!" />
                </div><br></br>
            </form>
        </div>
    );
}

export default Upload;