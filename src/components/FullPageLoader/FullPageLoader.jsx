import React from 'react'
import Spinner from "../../assets/Images/loading.gif"
import "./FullPageLoader.css"

function FullPageLoader() {
    return (
        <div className="fullpage-container">
            <img src={Spinner} className="fullpage-loading" alt="loading" />
        </div>
    )
}

export default FullPageLoader