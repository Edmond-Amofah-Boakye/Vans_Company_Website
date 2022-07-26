import React from 'react'
import "../styles/Homepage.css"
import banner from "../images/banner.jpg"
import agency  from "../images/agency-pic.jpg"
import { ItemList } from './ItemList'
import ItemsRender from './ItemsRender'
import Register from './Register'
function Homepage() {
    return (
        <>
            <div className = "intro" style = {{backgroundImage: `url(${banner})`,
                 backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize: "cover"}}>
                <div className = "wrapper">
                <h1 className = "build">We help You Build</h1>
                <h1 className = "empire">Your Tech Empire</h1>
                <p>Quality Assurance and Customer Saticfaction <br/> is our Priority</p> 
                </div>
            </div>
            <div className = "activities">
                <div className = "mobileApp" style = {{backgroundColor: "rgb(102, 8, 189)", padding: "3rem"}}>
                    <h3>Mobile <br/> Development</h3>
                </div>

                <div className = "website" style = {{backgroundColor: "rgb(126, 58, 58)", padding: "3rem"}}>
                    <h3>Website <br/> Development </h3>
                </div>

                <div className = "machineLearning" style = {{backgroundColor: "rgb(192, 37, 37)", padding: "3rem 4rem"}}>
                    <h3>Machine <br/> Learning</h3>
                </div>
            </div>

            <div className = "historySection">
                <div className = "historyInfo">
                    <h1>Great Digital Agency <br/>Since 200</h1>
                    <p>creative and professional digital agency</p>
                    <p>we do professional work and creative writing with the state of thr Art tool.<br/>Our team is the best in the world</p>
                </div>

                <div className = "historyPic">
                    <img src = {agency} alt="agency pic" width ="350px"/>
                    
                </div>
            </div>
            <div className="news">
               <ItemsRender ItemList = {ItemList}/> 
            </div>
            <div className="registers">
                <Register/>
            </div>
            
        </>
    )
}

export default Homepage
