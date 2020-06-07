import { useMutation, useQuery } from '@apollo/react-hooks'
import Link from 'next/link'
import { withRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Layout from '../components/Layout'
import Loading from '../components/Loading'
import PostQandA from '../components/postPage/PostQandA'
import InputHeader from '../components/text-field/InputHeader'
import { apolloClient } from '../lib/apollo'
import { resetAlert, setAlert } from '../redux/reducers/alertNotif'
import { setCurrentUserSP } from '../redux/reducers/currentUser'
import { setToken } from '../redux/reducers/token'
import { palletteGenerator, triggerAlert, useField } from '../src/functions/functions'
import { ASK_QUESTION, MAKE_NOTIFICATION, SAVE_POST } from '../src/schemas/mutations'
import { FIND_POST, Q_AND_A_NOTIFS } from '../src/schemas/queries'
import indexStyle from '../styles/pages/index.module.css'
import ppStyle from '../styles/pages/newPostPage.module.css'

const PostPage = withRouter((props) => {
    const [currentPost, setCurrentPost] = useState(props.post)
    const [skillExpanded, setSkillExpanded] = useState(null)
    const question = useField('text')
    const message = useField('text')
    const onJoinError = (e) => {
        if (e.message.includes('is longer than the maximum allowed length')) {
            triggerAlert('warning', `message$: message of ${message.fields.value.length} characters exceeded the maximum of 800 characters.`, props.setAlert, props.resetAlert)
        }
    }
    const onQuestionError = (e) => {
        if (e.message.includes('is longer than the maximum allowed length')) {
            triggerAlert('warning', `question$: question of ${question.fields.value.length} characters exceeded the maximum of 800 characters.`, props.setAlert, props.resetAlert)
        }
    }
    const onFollowError = (e) => {
        console.log(e)
    }

    const [followMutation] = useMutation(SAVE_POST, {
        onError: onFollowError
    })
    const [makeNotification] = useMutation(MAKE_NOTIFICATION, {
        onError: onJoinError
    })
    const [askQuestion] = useMutation(ASK_QUESTION, {
        onError: onQuestionError
    })

    const handleFollow = async () => {
        if (!props.token) {
            triggerAlert('warning', 'sign in$: must be signed in to perform this action', props.setAlert, props.resetAlert)
        }
        const result = await followMutation({
            variables: {
                user: props.currentUser._id,
                postId: currentPost._id
            }
        })

        if (result) {
            props.setCurrentUserSP(props.currentUser.savedPosts.concat(currentPost))
            triggerAlert('success', 'followed$: you are now following this post', props.setAlert, props.resetAlert)
        }
    }
    
    const qandaQuery = useQuery(Q_AND_A_NOTIFS, {
        variables: {title: decodeURIComponent(props.postTitle)}
    })
    // const postQuery = useQuery(FIND_POST, {
    //     variables: {title: decodeURIComponent(props.postTitle)}
    // })
    const qandaChangeConditions = () => {
        const query = qandaQuery.data
        const reducer = currentPost
        if (!query) return null
        if (!query.searchAnsweredQToPost) return null
        if (!reducer) return null
        if (reducer.qanda) return null
        return query.searchAnsweredQToPost
    }
    // const postChangeConditions = () => {
    //     const query = postQuery.data
    //     const reducer = currentPost
    //     if (!query) return null
    //     if (!query.findPost) return null
    //     if (reducer) {
    //         if (reducer.title === query.findPost.title) return null
    //     }
    //     return query.findPost
    // }
    const qanda = qandaChangeConditions()
    // const post = postChangeConditions()
    useEffect(() => {
        if (qanda) {
            setCurrentPost({...currentPost, qanda})
        }
        // if (post) {
        //     setCurrentPost(post)
        // }
    }, [qanda, setCurrentPost, currentPost])
    if (!currentPost) {
        return <Loading />
    }

    let cleanedTime = new Date(Number(currentPost.time))
    cleanedTime = cleanedTime.toString().split(' ')
    // cleanedTime = cleanedTime.slice(1,4).join(' ') + ' ' + cleanedTime[4].split(':').slice(0,2).join(':')
    cleanedTime = cleanedTime.slice(1,3).join(' ') + ', ' + cleanedTime[3]

    let qandaList = currentPost.qanda ? currentPost.qanda.map(i => <PostQandA qanda={i} key={`QandA${i.question}`} />) : <Loading />
    qandaList = qandaList.length ? qandaList : <div className={ppStyle.qandaText}>no question and answer pairs yet</div>
    const skillsHTML = []
    const questionStyle = skillExpanded ? {display: 'none'} : {display: 'block'}
    const handleNotification = async (proposedContribution) => {
        if (!props.currentUser) {
            triggerAlert('warning', `sign in$: must be signed in to perform this action`, props.setAlert, props.resetAlert)
            return null
        }
        if (!message.fields.value.length) {
            triggerAlert('warning', `message$: message field is required`, props.setAlert, props.resetAlert)
            return null
        }
        const result = await makeNotification({
            variables: {
                userFromId: props.currentUser._id,
                userToId: currentPost.user._id,
                message: message.fields.value,
                postId: currentPost._id,
                proposedContribution
            }
        })
        if (result) {
            setSkillExpanded(null)
            message.reset()
            triggerAlert('success', `sent$: (check your answered notifications for the response) request has been sent to ${currentPost.user.username}`, props.setAlert, props.resetAlert)
        }
    }
    for (const ins in currentPost.skillNames) {
        const skillName = currentPost.skillNames[ins]
        const skillFill = currentPost.skillFills[ins]
        const skillCap = currentPost.skillCapacities[ins]
        const messageStyle = skillExpanded === skillName ? {display: 'block'} : {display: 'none'}
        const buttonToShown = skillExpanded === skillName ?
            <h4 onClick={() => setSkillExpanded(null)} className={ppStyle.PPSButtonExit}>X</h4>
            :
            skillFill < skillCap ?
                <h4 onClick={() => setSkillExpanded(skillName)} className={ppStyle.PPSButton}>join</h4>
                :
                <h4 className={ppStyle.PPSButtonDisabled}>join</h4>

        const skillProposition = Array(currentPost.skillNames.length).fill(0)
        skillProposition[ins] = 1
        skillsHTML.push( 
            <div className={ppStyle.PPSSkill} key={`PPSS${skillName}`}>
                <div className={ppStyle.PPSDivision} />
                <p className={ppStyle.PPSSkillName}>{skillName}</p>
                <div className={ppStyle.PPSSkillSecondary}>
                    <p className={ppStyle.PPSSkillInfo}>{skillFill}/{skillCap}</p>
                    {buttonToShown}
                </div>
                <div className={ppStyle.PPSSkillForm} style={messageStyle}>
                    <div className={ppStyle.PPSTitle}>
                        <InputHeader inputFor="PPS-message" info={false} title="message" color="white" />
                    </div>
                    <div className={ppStyle.PPSInputContainer}>
                        <textarea className={ppStyle.PPSInput} id="PPS-message" {...message.fields}></textarea>
                    </div>
                    <div className={ppStyle.PPCSubmitContainer}>
                        {<h4 onClick={() => handleNotification(skillProposition)} className={ppStyle.PPSBButton} style={{borderColor: currentPost.color}}>join</h4>}
                    </div>
                </div>
            </div>
        )
    }

    const handleQuestion = async () => {
        if (!props.currentUser) {
            triggerAlert('warning', `sign in$: must be signed in to perform this action`, props.setAlert, props.resetAlert)
            return null
        }
        if (!question.fields.value.length) {
            triggerAlert('warning', `question$: question field is required`, props.setAlert, props.resetAlert)
            return null
        }
        const result = await askQuestion({
            variables: {
                userFromId: props.currentUser._id,
                userToId: currentPost.user._id,
                postId: currentPost._id,
                question: question.fields.value
            }
        })
        if (result) {
            question.reset()
            triggerAlert('success', `sent$: (check your answered notifications for the response) question has been sent to ${currentPost.user.username}`, props.setAlert, props.resetAlert)
        }
    }
    const pallette = palletteGenerator(currentPost.color).colorPallette

    const teamHTML = currentPost.team ? currentPost.team.map(un =>
        <Link href="/user/username" as={`/user/${un}`} key={`PT${un}`}>
            <a className={`${ppStyle.PPCUserContainer} neutralize-link`}>
                <img className={ppStyle.PPCUserIcon} src='/svg/userB.svg' alt="user" />
                <p className="NM">{un}</p>
            </a>
        </Link>
        
    ): null

    const HomeContent = () => {
        return (
            <div className={ppStyle.homeOptions}>
                <Link href="/results/[searchQuery]" as="/results/all">
                    <a className={`${ppStyle.homeOption} neutralize-link`} style={{backgroundColor: '#282828'}}>
                        <img src='/svg/searchWW.svg' className={ppStyle.homeOptionIcon} alt="search" />
                        <h3 className={ppStyle.homeOptionText}>browse all</h3>
                    </a>
                </Link>
                <Link href="/postformpage">
                    <a className={`${ppStyle.homeOption} neutralize-link`} style={{backgroundColor: 'rgb(52,166,95)'}}>
                        <img src='/svg/plusW.svg' className={ppStyle.homeOptionIcon} alt="add" />
                        <h3 className={ppStyle.homeOptionText}>add project</h3>
                    </a>
                </Link>
                <a href="https://discord.gg/v7vFc9U" className={`${ppStyle.homeOption} ${ppStyle.homeOptionHighlight} neutralize-link`} style={{backgroundColor: '#7289DA'}}>
                    <img src='/svg/websites/discord.svg' className={ppStyle.homeOptionIcon} alt="Discord" />
                    <h3 className={ppStyle.homeOptionText}>community discord</h3>
                </a>
            </div>
        )
    }

    const ModifiedDescription = () => {
        const spacedDis = currentPost.description.split(' ')
        for (const i in spacedDis) {
            if (spacedDis[i].includes('https://')) {
                spacedDis[i] = `<a href="${spacedDis[i]}" class="p-link neutralize-link">${spacedDis[i]}</a>`
            }
            if (spacedDis[i].includes('http://')) {
                spacedDis[i] = `<a href="${spacedDis[i]}" class="p-link neutralize-link">${spacedDis[i]}</a>`
            }
        }
        const finalDis = spacedDis.join(' ')
        return <p className={ppStyle.PPCDescription} dangerouslySetInnerHTML={{__html: finalDis}} />
    }
    const skillCap = currentPost.skillCapacities.reduce((n, t) => t + n, 0)
    const skillFill = currentPost.skillFills.reduce((n, t) => t + n, 0)
    const titleKeywords = () => {
        let title = currentPost.title
        title = title.split(' ')
        let keywords = title.map(w => {
            if (w.slice(0, 1).toUpperCase() === w.slice(0, 1) && w.slice(0, 1).toLowerCase() === w.slice(0, 1)) return null
            if (w.slice(0, 1).toUpperCase() === w.slice(0, 1)) return w + ','
            return null
        })
        keywords = keywords.length ? keywords.join(' ') : title[0] + ', '
        
        return keywords
    }
    
    // <Helmet>
    //     <title>{currentPost.title}</title>
    //     <meta name="author" content={currentPost.user.username} />
    //     <meta name="description" content={`Join the project, be part of "${currentPost.title}" team! So far ${skillFill} awesome people have joined, there are only ${skillCap - skillFill} slots left.`} />
    //     <meta name="keywords" content={`${titleKeywords()} build, team`} />
    // </Helmet>
    return (
        <>
          <Layout>        
            <div id='filler' style={{ height: 70 }}></div>
            <div className={`${indexStyle.container} ${indexStyle.buildYourTeamCreateYourProject}` }>
              <div className={`${indexStyle.containerItem} ${indexStyle.containerItemText}` }>
                <h1>Build your team, create your project</h1>
                <p className={indexStyle.lgPara}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                </p>
                <div style={{ display: 'flex' }}>
                  <button className={`${indexStyle.button} ${indexStyle.btnLight} ${indexStyle.adjacentHalfWidthButtons}`}>Choose project to join</button>
                  <button className={`${indexStyle.button} ${indexStyle.btnLD} ${indexStyle.adjacentHalfWidthButtons}`}>Create new project</button>
                </div>            
              </div>
              <div className={indexStyle.containerItemImage}>
                <img src='./svg/infoW.svg' alt='build your team' width='100%'></img>
              </div>
            </div>
            <div id='community' className={`${indexStyle.container} ${indexStyle.communityOrProjectsDiv}`}>
              <div className={indexStyle.containerItemText}>            
                <h2>Community</h2>
                <p className={indexStyle.lgPara}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                </p>
                <button className={` ${indexStyle.button} ${indexStyle.btnDark} ${indexStyle.halfWidthButton}`}>Join</button>     
              </div>
              <div className={indexStyle.containerItemImage}>
                <img src='./svg/usaB.svg' alt='community' width='100%'></img>
              </div>
            </div>
            <div id='projects' className={`${indexStyle.container} ${indexStyle.communityOrProjectsDiv}`}>
              <div className={indexStyle.containerItemText}>       
                <h2>Projects</h2>
                <p className={indexStyle.lgPara}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                </p>
                <button className={` ${indexStyle.button} ${indexStyle.btnDark} ${indexStyle.halfWidthButton}`}>Join</button>            
              </div>
              <div className={indexStyle.containerItemImage}>
                <img src='./svg/usaB.svg' alt='projects' width='100%'></img>
              </div>
            </div>
          </Layout>
        {/* original below */}
        {/* <Layout>
            <Head>
                <title>Unilous</title>
                <meta property="og:image" content="https://i.imgur.com/d6bsnRx.png" key="title" />
                <meta name="description" content="Looking to join or make a team, Unilous will help you make it happen! Join our skilled community of people looking to make something great." key="description"/>
                <meta name="google-site-verification" content="-ccdPuW0WxjjhXsjDgnfbYeolghrlU6r3MLjOdWKpCw" />
            </Head>
            <div className="navbar-height" />
            <div className={ppStyle.postPageContainer}>
                <div className={ppStyle.PPContent}>
                    <HomeContent />
                    <h2 className={ppStyle.PPCTitle}>{currentPost.title}</h2>
                    <div className={ppStyle.PPCSubHeader}>
                        <Link href="/user/[username]" as={`/user/${encodeURIComponent(currentPost.user.username)}`} >
                            <a className={`${ppStyle.PPCUserContainer} neutralize-link`}>
                                <img className={ppStyle.PPCUserIcon} src='/svg/userB.svg' alt="user" />
                                <p className="NM">{currentPost.user.username}</p>
                            </a>
                        </Link>
                        <p className={ppStyle.PPCTime}>{cleanedTime}</p>
                    </div>
                    <ModifiedDescription />
                    <PostImages imageLinks={currentPost.imageLinks} color={currentPost.color} />
                    <PostLinks referenceLinks={currentPost.referenceLinks} />
                    <h3 className={ppStyle.PPCTitle}>Q and A</h3>
                    <div className={ppStyle.PPCAllQandaContainer}>
                        {qandaList}
                    </div>
                    <h3 className={ppStyle.PPCTitle}>team</h3>
                    <div className={ppStyle.teamInfo}>{teamHTML.length} team members</div>
                    <div className={ppStyle.PPCTeamContainer}>
                        {teamHTML}
                    </div>
                </div>
                <FormContainer pallette={pallette}>
                    <div  className={ppStyle.PPSFollowHeader} >
                        <div onClick={() => handleFollow()} className={ppStyle.PPSFollowHeader} style={{borderTop: '2px solid currentPost.color'}}>
                            <svg className={ppStyle.PPCUserIcon} fill={currentPost.color} viewBox="0 -28 512.00002 512" xmlns="http://www.w3.org/2000/svg"><path d="m471.382812 44.578125c-26.503906-28.746094-62.871093-44.578125-102.410156-44.578125-29.554687 0-56.621094 9.34375-80.449218 27.769531-12.023438 9.300781-22.917969 20.679688-32.523438 33.960938-9.601562-13.277344-20.5-24.660157-32.527344-33.960938-23.824218-18.425781-50.890625-27.769531-80.445312-27.769531-39.539063 0-75.910156 15.832031-102.414063 44.578125-26.1875 28.410156-40.613281 67.222656-40.613281 109.292969 0 43.300781 16.136719 82.9375 50.78125 124.742187 30.992188 37.394531 75.535156 75.355469 127.117188 119.3125 17.613281 15.011719 37.578124 32.027344 58.308593 50.152344 5.476563 4.796875 12.503907 7.4375 19.792969 7.4375 7.285156 0 14.316406-2.640625 19.785156-7.429687 20.730469-18.128907 40.707032-35.152344 58.328125-50.171876 51.574219-43.949218 96.117188-81.90625 127.109375-119.304687 34.644532-41.800781 50.777344-81.4375 50.777344-124.742187 0-42.066407-14.425781-80.878907-40.617188-109.289063zm0 0"/></svg>
                            <p className="NM">follow</p>
                        </div>
                    </div>
                    {skillsHTML}
                    <div style={questionStyle}>
                        <div className={ppStyle.PPSDivision} />
                        <div className={ppStyle.PPSTitle}>
                            <InputHeader inputFor="PPS-question" info={true} title="question" color="white" >
                                <ul style={{margin: 0}}>
                                    <li>if answered it will be shown on post</li>
                                </ul>
                            </InputHeader>
                        </div>
                        <div className={ppStyle.PPSInputContainer}>
                            <textarea className={ppStyle.PPSInput} id="PPS-question" {...question.fields}></textarea>
                        </div>
                        <div className={ppStyle.PPCSubmitContainer}>
                            <h4 onClick={() => handleQuestion()} className={ppStyle.PPSButton} style={{borderColor: currentPost.color}}>ask</h4>
                        </div>
                    </div>
                </FormContainer>
            </div>
        </Layout> */}
        </>
    )
})

// const mapStateToProps = (state) => {
// 	return {
//         currentUser: state.currentUser,
//         token: state.token
// 	}
// }
// export default connect(
//     mapStateToProps, 
//     { setAlert, resetAlert, setCurrentUserSP }
// )(PostPage)

PostPage.getInitialProps = async () => {
    const postQuery = await apolloClient.query({
        query: FIND_POST,
        variables: {title: 'Unilous'} 
    }).catch(err => console.log(err))
    console.log(postQuery)
    return {
        post: postQuery.data.findPost,
    }
}

const mapStateToProps = (state) => {
	return {
        currentUser: state.currentUser,
        token: state.token,
        alertNotif: state.alertNotif,
	}
}
const mapDispatchToProps = (dispatch) => {
    return {
        setAlert: bindActionCreators(setAlert, dispatch),
        resetAlert: bindActionCreators(resetAlert, dispatch),
        setToken: bindActionCreators(setToken, dispatch),
        setCurrentUserSP: bindActionCreators(setCurrentUserSP, dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PostPage)