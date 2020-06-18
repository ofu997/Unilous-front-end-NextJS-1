import React from 'react';
import SB from '../styles/sidebar.module.css';

const Sidebar = () => 
  <>
    <div className={SB.container}>
      <div className={SB.userInformation}>
        <p> some user information </p>
      </div>
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
    </div>
  </>

export default Sidebar; 

// using <Link>: error: Cannot read property 'indexOf' of undefined