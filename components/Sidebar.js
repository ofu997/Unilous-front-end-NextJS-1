import React from 'react';
import SB from '../styles/sidebar.module.css';

const Sidebar = () => 
  <>
    <div className={SB.container}>
      <div style={{ height: '5%' }} ></div>
      <div className={SB.userInformation} style={{ border: '2px solid yellow'}}>
        <div className={SB.profilePic} style={{ border: '2px solid green'}}>
          <img src='/svg/websites/discord.svg' style={{ maxWidth: '100%', maxHeight: '100%' }}></img>
        </div>
        <p> Name </p>
      </div>
      <div style={{ height: '5%' }} ></div>
      <div className={SB.ProjectsAndUsers}>
        <h3>Projects</h3>
          <a><p>Created</p></a>
          <a><p>Joined</p></a>
          <a><p>Following</p></a>
          <a><p>Others</p></a>
        <div style={{ height: '5%' }}></div>
        <h3>Users</h3>
        <a><p>In my projects</p></a>
        <a><p>Invited</p></a>
        <a><p>Others</p></a>
      </div>
      <div style={{ height: '10%' }} ></div>
    </div>
  </>

export default Sidebar; 

// using <Link>: error: Cannot read property 'indexOf' of undefined