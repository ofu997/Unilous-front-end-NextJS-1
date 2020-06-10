import React from 'react'
import { connect } from 'react-redux'
import Layout from '../../components/Layout'
import Head from 'next/head'

const BlogIndex = () => {
    return (
        <Layout>
            <Head>
                <title>Contact | Unilous</title>
                <meta name="description" content="Contact the Unilous team" key="description"/>
            </Head>
            <div className="navbar-height" />
            
        </Layout>
    )
}

const mapStateToProps = (state) => {
	return {
        // currentUser: state.currentUser,
	}
}

const mapDispatchToProps = (dispatch) => {
    return {
        // setUserDD: bindActionCreators(setUserDD, dispatch),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BlogIndex)