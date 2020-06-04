import React, {useState} from 'react'
import { connect } from 'react-redux'
import NB from '../../../styles/newNavBar.module.css'
import Link from 'next/link'
import {bindActionCreators} from 'redux'
import Register from '../../user/form/Register'
import SignIn from '../../user/form/SignIn'

const NotSigned = (props) => {
    const [userState, setUserState] = useState(false)
    const handleUserState = (state) => {
        if (state === userState) {setUserState(false)}
        else {setUserState(state)}
    }

    const showUserDD = userState ? {display: 'block'} : {display: 'none'}
    const showInDD = userState ? 
        userState === 'register' ? <Register /> : <SignIn />
    : null
   
    return (
        <div className={NB.userWrapper}     >
            <div className={NB.userContainer}>
                <button className={NB.signOption} onClick={() => handleUserState('signin')} >sign in</button>
                <button className={NB.signOption} onClick={() => handleUserState('register')} >register</button>
            </div>
            <div className={NB.userDD} style={showUserDD}>
                <div className="custom-hr" style={{backgroundColor: '#282828'}} />
                {showInDD}
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
	return {
        currentUser: state.currentUser,
        token: state.token,
        // alertNotif: state.alertNotif
	}
}

const mapDispatchToProps = (dispatch) => {
    return {
        // clearToken: bindActionCreators(clearToken, dispatch),
        // resetAlert: bindActionCreators(resetAlert, dispatch),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NotSigned)