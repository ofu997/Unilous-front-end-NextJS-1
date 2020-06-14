import React from 'react'
// import '../styles/pages/test.css'
import { connect } from 'react-redux'
import Layout from '../components/Layout'
import Head from 'next/head'

const Test = () => {
    

    return (
        <Layout>
            <div className="navbar-height" />
            <h1 className="testt">test</h1>
        </Layout>
    )
}

export default connect(
    null
)(Test)