import React from 'react'
import HP from '../styles/pages/homePage.module.css'
import { connect } from 'react-redux'
import Layout from '../components/Layout'
import Contributer from '../components/Contributer'
import Head from 'next/head'
import {apolloClient} from '../lib/apollo'
import {FIND_POST, SEARCH_POSTS, SOME_USERS} from '../schemas/queries'
import Post from '../components/post/Post'

const HomePage = (props) => {

    const listOfUsers = props.someUsers.map(u => (
        <div className={HP.userIns}>
            <div className={HP.userPrimary}>{u.username}</div>
            <div className={HP.userSecondary}>0 projects</div>
        </div>
    ))

    return (
        <Layout>
            <Head>
                <title>Unilous</title>
                <meta property="og:image" content="https://i.imgur.com/d6bsnRx.png" key="title" />
                <meta name="description" content="Looking to join or make a team, Unilous will help you make it happen! Join our skilled community of people looking to make something great." key="description"/>
            </Head>
            <div className="navbar-height" />
            <div className={HP.wrapper} style={{backgroundColor: '#282828'}}>
                <div className={HP.rowContainer} style={{color: 'white'}}>
                    <div className={`${HP.textBox} ${HP.narrow}`}>
                        <h1 className={HP.leftAlign}>Build your team, create your project</h1>
                        <p className={HP.lgPara}>
                            Unilous is a platform uniquely designed for building teams. At the center of Unilous lies the project post which provides both the information a user would want to know about the project, and features necessary for an effective joining process.
                        </p>
                        <div style={{ display: 'flex' }}>
                            <button className={`${HP.button} ${HP.btnLight} ${HP.adjacentHalfWidthButtons}`}>Get started</button>
                        </div>            
                    </div>
                    <div className={`${HP.imageBox} ${HP.narrow} ${HP.buildYourTeamOuterBox}`}>
                        <div className={`${HP.buildYourTeamImage} ${HP.buildYourTeamInnerBox}`}>
                            <Post post={props.post} short /> 
                        </div>
                    </div>
                </div>
            </div>
            <div className={HP.wrapper}>
                <div className={HP.rowContainer} >
                    <div className={HP.card} style={{justifySelf: 'end'}}>
                        <div className={HP.cardHeading}>Create a project</div>
                        <div className={HP.cardContent}>The project serves as the vehicle of Unilous as it is the method to which the team is built. Projects are automatically displayed on our results page where they are *ordered on effectiveness and time of posting*. We  provide you with all of the necessary features to pitch your project in an attractive way all the while containing all of the necessary information the user would want.</div>
                        <ol className={HP.cardList}>
                            <li className={HP.cardListItem}>*Sign in* or *Register*</li>
                            <li className={HP.cardListItem}>Create post</li>
                            <li className={HP.cardListItem}>(Optional) Share it</li>
                        </ol>
                        <div style={{height: '170px'}} />
                        <button className={`${HP.button} ${HP.btnDark}`}>*Sign in* or *Register*</button>
                    </div>
                    <div className={HP.card} style={{justifySelf: 'start'}}>
                        <div className={HP.cardHeading}>Join a project</div>
                        <div className={HP.cardContent}>While the project is the vehicle of Unilous, its users make it move. Many of the projects posted are rough ideas on what it could be, by joining a project we encourage that the users joining work side by side with the creator to imagine something better. We offer a variety of projects ranging all fields and interests as Unilous was built with everyone in mind. Unilous has made its project joining process as *simple as it can be*.</div>
                        <ol className={HP.cardList}>
                            <li className={HP.cardListItem}>*Sign in* or *Register*</li>
                            <li className={HP.cardListItem}>*Find a project*</li>
                            <li className={HP.cardListItem}>Join on a specific skill on the project</li>
                            <li className={HP.cardListItem}>*Check notifications* for the response</li>
                        </ol>
                        <div style={{height: '170px'}} />
                        <button className={`${HP.button} ${HP.btnDark}`}>*Sign in* or *Register*</button>
                    </div>
                </div>
            </div>
            <div className={HP.wrapper}>
                <div id='community' className={`${HP.rowContainer} ${HP.communityOrProjectsDiv}`}>
                    <div className={`${HP.textBox} ${HP.narrow}`}>            
                        <h2 className={HP.leftAlign}>Network</h2>
                        <p className={HP.lgPara}>
                        Unilous does the networking so you don't need to. We provide you with access to all of our talented users by directly *browsing our users* or indirectly posting projects for all of the potentially interested users to see. The Unilous community although with different interests and skill sets are all looking to create and be part of something great.
                        </p>
                        <button className={` ${HP.button} ${HP.btnDark} ${HP.adjacentHalfWidthButtons}`}>Browse users</button>     
                    </div>
                    <div className={`${HP.imageBox} ${HP.narrow}`}>
                        <div className={HP.userBoxContainer}>
                            <div className={HP.userHeader}>
                                <img src="/svg/logo/logoW.svg" className={HP.logo} />
                                <h3 className={HP.userTitle}>Users</h3>
                            </div>
                            <div className={HP.usersContainer}>
                                {listOfUsers}
                            </div>
                            <div className={HP.userFooter}>more...</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={HP.wrapper}>
                <div id='projects' className={`${HP.rowContainer} ${HP.communityOrProjectsDiv}`}>
                    <div className={`${HP.textBox} ${HP.narrow}`}>       
                        <h2 className={HP.leftAlign}>Projects</h2>
                        <p className={HP.lgPara}>
                            Unilus contains many different kinds of projects with all kinds of skills needed. Although they have different complexities and different skill requirements, all of them need a team. Project Unilous for example is also on display welcoming new members interested in contributing to it.
                        </p>
                        <button className={` ${HP.button} ${HP.btnDark} ${HP.adjacentHalfWidthButtons}`}>Browse projects</button>            
                    </div>
                    <div className={HP.imageBox}>
                        <div className={HP.postContaiener}>
                            <Post post={props.otherPosts[0]} short />
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}
HomePage.getInitialProps = async () => {
    const postQuery = await apolloClient.query({
        query: FIND_POST,
        variables: {title: 'Unilous'} 
    }).catch(err => console.log(err))
    const postsQuery = await apolloClient.query({
        query: SEARCH_POSTS,
        variables: {
            filterString: '',
            postIds: [],
            eventQuery: null,
        }
    }).catch(err => console.log(err))
    const someUsers = await apolloClient.query({
        query: SOME_USERS,
        variables: {
           skip: 0,
           first: 6,
        }
    }).catch(err => console.log(err))
    // console.log(postQuery)
    return {
        post: postQuery.data.findPost,
        otherPosts: postsQuery.data.searchPosts,
        someUsers: someUsers.data.someUsers
    }
}

export default connect(
    null
)(HomePage)