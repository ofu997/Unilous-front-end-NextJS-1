import React from 'react';
import Layout from '../components/Layout';
import indexStyle from '../styles/pages/homepage.module.css';

const Homepage = () => {
  return (
    <>
      <Layout>        
        <div id='filler' style={{ height: 70 }}></div>
        <div className={`${indexStyle.container} ${indexStyle.buildYourTeamCreateYourProject}`}>
          <div className={`${indexStyle.textBox} ${indexStyle.wide}`}>
            <h1 className={indexStyle.leftAlign}>Build your team, create your project</h1>
            <p className={indexStyle.lgPara}>
              Unilous is a platform uniquely designed for building teams. At the center of Unilous lies the project post which provides both the information a user would want to know about the project, and features necessary for an effective joining process.
            </p>
            <div style={{ display: 'flex' }}>
              <button className={`${indexStyle.button} ${indexStyle.btnLight} ${indexStyle.adjacentHalfWidthButtons}`}>Choose project to join</button>
              <button className={`${indexStyle.button} ${indexStyle.btnLD} ${indexStyle.adjacentHalfWidthButtons}`}>Create new project</button>
            </div>            
          </div>
          <div className={`${indexStyle.imageBox} ${indexStyle.narrow} ${indexStyle.buildYourTeamOuterBox}`}>
            <div className={`${indexStyle.buildYourTeamImage} ${indexStyle.buildYourTeamInnerBox}`}>
              <img src='./svg/usaB.svg' alt='community' width='100%'></img> 
            </div>
          </div>
        </div>
        <div id='community' className={`${indexStyle.container} ${indexStyle.communityOrProjectsDiv}`}>
          <div className={`${indexStyle.textBox} ${indexStyle.narrow}`}>            
            <h2 className={indexStyle.leftAlign}>Network</h2>
            <p className={indexStyle.lgPara}>
              Unilous does the networking so you don't need to. We provide you with access to all of our talented users by directly *browsing our users* or indirectly posting projects for all of the potentially interested users to see. The Unilous community although with different interests and skill sets are all looking to create and be part of something great.
            </p>
            <button className={` ${indexStyle.button} ${indexStyle.btnDark} ${indexStyle.halfWidthButton}`}>Browse users</button>     
          </div>
          <div className={`${indexStyle.imageBox} ${indexStyle.wide}`}>
            <img src='./svg/usaB.svg' alt='community' width='100%'></img>
          </div>
        </div>
        <div id='projects' className={`${indexStyle.container} ${indexStyle.communityOrProjectsDiv}`}>
          <div className={`${indexStyle.textBox} ${indexStyle.narrow}`}>       
            <h2 className={indexStyle.leftAlign}>Projects</h2>
            <p className={indexStyle.lgPara}>
              Unilus contains many different kinds of projects with all kinds of skills needed. Although they have different complexities and different skill requirements, all of them need a team. Project Unilous for example is also on display welcoming new members interested in contributing to it.
            </p>
            <button className={` ${indexStyle.button} ${indexStyle.btnDark} ${indexStyle.halfWidthButton}`}>Browse projects</button>            
          </div>
          <div className={`${indexStyle.imageBox} ${indexStyle.wide} ${indexStyle.projectImages}`}>
            <img src='./svg/handshakeB.svg' alt='projects' width='40%'></img>
            <img src='./svg/exitB.svg' alt='projects' width='40%'></img>
          </div>
        </div>
      </Layout>    
    </>
  )
}

export default Homepage; 