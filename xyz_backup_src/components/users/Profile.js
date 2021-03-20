import React from "react";
import { Redirect } from 'react-router-dom';
import { useSelector } from "react-redux";
import '../CSS/Profile.css'
const Profile = () => {
  const { user: currentUser } = useSelector((state) => state.auth);

  if (!currentUser.user) {
    return <Redirect to="/login" />;
  }

  return (
    <div className="profileWrap">
   
        <h3>
          <strong>{currentUser.user.username}</strong> Profile
        </h3>
   
      <p>
        <strong>Token:</strong> {currentUser.accessToken.substring(0, 20)} ...{" "}
        {currentUser.accessToken.substr(currentUser.accessToken.length - 20)}
      </p>
      <p>
        <strong>Id:</strong> {currentUser.user.id}
      </p>
      <p>
        <strong>Email:</strong> {currentUser.user.email}
      </p>
      <strong>Authorities:</strong>
      <ul>
        {currentUser.user.roles &&
          currentUser.user.roles.map((role, index) => <li key={index}>{role}</li>)}
      </ul>
    </div>
  );
};

export default Profile;