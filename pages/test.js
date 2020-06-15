import React, {useState} from 'react'
// import '../styles/pages/test.css'
import { connect } from 'react-redux'
import Layout from '../components/Layout'
import Head from 'next/head'

const Test = () => {
    let fileInput = React.createRef()

    const handleSubmit = (e) => {
        event.preventDefault()
        console.log(`selected file: ${fileInput.current.files[0]}`)
    }
    return (
        <Layout>
            <div className="navbar-height" />
            <h1 className="testt">test</h1>
            <form onSubmit={handleSubmit}>
                <input type="file" ref={fileInput} />
                <br />
                <button type="submit">submit</button>
            </form>
        </Layout>
    )
}

export default connect(
    null
)(Test)