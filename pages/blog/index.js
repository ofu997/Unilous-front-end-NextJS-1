import React from 'react'
import { connect } from 'react-redux'
import Layout from '../../components/Layout'
import Head from 'next/head'
import Link from 'next/link'

const BlogIndex = () => {
    return (
        <Layout>
            <Head>
                <title>Blogs | Unilous</title>
                <meta name="description" content="Contact the Unilous team" key="description"/>
            </Head>
            <div className="navbar-height" />
            <Link href="/blog/react_to_nextjs">
                <a className={`neutralize-link`}>
                    <h2>Converting a React application with Redux and Apollo to Next.JS</h2>
                </a>
            </Link>
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