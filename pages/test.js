import React, { useState } from 'react'
import { connect } from 'react-redux'
import Layout from '../components/Layout'
import Sidebar from '../components/Sidebar'
import UploadImage from '../components/UploadImage'
import T from '../styles/test.module.css'

const Test = () => {
    const [imageURL, setImageURL] = useState(null)
    
    const onSuccess = (url) => {
        setImageURL(url)
    }

    const showUploadImage = imageURL ?
        <img src={imageURL} style={{width: '300px'}} />
        :
        <UploadImage onSuccess={onSuccess} />
    
    return (
        <Layout>
            <div className={T.UPContainsAll}>
                <div className={T.UPSidebar}>
                    <Sidebar />
                </div>
                <div className="navbar-height" />
                <h1 className="testt">test</h1>
                <div style={{width: '300px', height: '300px'}}>
                    {showUploadImage}
                </div>
                <br />
            </div>
        </Layout>
    )
}

export default connect(
    null
)(Test)
// cc972a94b762b77