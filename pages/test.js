import React, {useState} from 'react'
// import '../styles/pages/test.css'
import { connect } from 'react-redux'
import Layout from '../components/Layout'
import Head from 'next/head'

const Test = () => {
    let fileInput = React.createRef()

    // var myHeaders = new Headers();
    // myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
    // myHeaders.append("Authorization", "Client-ID cc972a94b762b77");
    
    // var formdata = new FormData();
    // formdata.append("image", fileInput.files[0], "/C:/Users/Sebastian/OneDrive/Pictures/aang.jpg");
    // const uploadToImgur = () => {
    //     var requestOptions = {
    //         method: 'POST',
    //         headers: {
    //           "Content-Type": "application/x-www-form-urlencoded",
    //           "Authorization": "Client-ID cc972a94b762b77"
    //         },
    //         body: {"image" : fileInput.current.files[0]},
    //         redirect: 'follow'
    //       };
          
    //       fetch("https://api.imgur.com/3/image", requestOptions)
    //         .then(response => response.text())
    //         .then(result => console.log(result))
    //         .catch(error => console.log('error', error));
    // }

    const [imageURL, setImageURL] = useState("")
    

    return (
        <Layout>
            <div className="navbar-height" />
            <h1 className="testt">test</h1>
            <input type="file" ref={fileInput} />
            <br />
            <button onClick={() => setImageURL(URL.createObjectURL(fileInput.current.files[0]))}>set</button>
            <img src={imageURL} alt="hello" />
        </Layout>
    )
}

export default connect(
    null
)(Test)
// cc972a94b762b77