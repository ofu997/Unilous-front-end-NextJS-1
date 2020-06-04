import React from 'react'
import HP from '../styles/pages/homePage.module.css'
import { connect } from 'react-redux'
import Layout from '../components/Layout'
import Contributer from '../components/Contributer'
import Head from 'next/head'

const HomePage = () => {
    return (
        <Layout>
            <Head>
                <title>Contact | Unilous</title>
                <meta name="description" content="Contact the Unilous team" key="description"/>
            </Head>
            <div className="navbar-height" />
            <div className={HP.container}>
                <h1>Build a team, create a project</h1>
                <p className={HP.lgPara}>
                    Unilous is a <a href="" className="linkDark">platform uniquely</a> designed for building teams. At the center of Unilous lies the project post which provides both the information a user would want to know about the project, and features necessary for an effective joining process.
                </p>
                <button className={`${HP.button} ${HP.btnDark}`}>Get started</button>

                <h2>Create a project</h2>
                <p className={HP.lgPara}>
                    The project serves as the vehicle of Unilous as it is the method to which the team is built. Projects are automatically displayed on our results page where they are *ordered on effectiveness and time of posting*. We  provide you with all of the necessary features to pitch your project in an attractive way all the while containing all of the necessary information the user would want.
                </p>
                <button className={`${HP.button} ${HP.btnDark}`}>Sign in or Register</button>
            </div>
        </Layout>
    )
}

export default connect(
    null
)(HomePage)