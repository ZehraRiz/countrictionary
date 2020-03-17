import React from 'react';
import Detail from '../components/Detail'
import { Link } from "react-router-dom";

function DetailPage ({match}){
    return(
    <div className = "detail-page"><Link to="/">
    <button className= "back-button">Back</button>
    </Link>
    <Detail match = {match}></Detail>
    </div>)
}

export default DetailPage;
