import React from 'react';
import './../../App.css';
import { data } from './Data';
import { FaThumbsUp, FaComment, FaBookmark, FaShareAlt, FaShoppingCart } from 'react-icons/fa';

const Body = () => {
  const users = Object.values(data);

  return (
    <div className="main-body-section">
      <div className="posts-container">
        {users.map((user, index) => (
          <div key={index} className="post-card">
            <div className="post-header">
              <img src={user.profilePicture} alt={user.name} className="profile-pic" />
              <div>
                <h4>{user.name} || @{user.username}</h4>
                <p>{user.description}</p>
              </div>
            </div>
            <img src={user.photoUrl} alt="post content" className="post-img" />
            <div className="post-actions">
              <FaThumbsUp className="icon" />
              <FaComment className="icon" />
              <FaBookmark className="icon" />
              <FaShareAlt className="icon" />
              <FaShoppingCart className="icon" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Body;
