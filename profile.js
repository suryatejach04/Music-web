import React from 'react';
import './profile.css';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import Favorites from './favourites';
import SimpleSlider from './simpleslider';

function Profile() {
  return (
    <div className='bg'>
        <h1>Profile</h1>
    <div className="profile-container">
        <div className="profile-header">
            <img src="https://picsum.photos/200" alt="Profile" />
            <h1>John Doe</h1>
            <p>New York, NY</p>
            <br></br>
        </div>
        <div className='fav'>
            <Favorites/>
        </div>
        </div>
        <SimpleSlider/>
        <div className="social-media">
          <a href="https://www.facebook.com"><FaFacebook size={50} className='text-light'/></a>
          <a href="https://www.twitter.com"><FaTwitter size={50} className='text-light'/></a>
          <a href="https://www.instagram.com"><FaInstagram size={50} className='text-light'/></a>
        </div>
    </div>
  );
}

export default Profile;
