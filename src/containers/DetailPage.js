import React from 'react';
import DetailTest from '../components/DetailTest'
import { Link } from "react-router-dom";

function DetailPage ({match}){
    return(
    <div className = "detail-page"><Link to="/">
    <button className= "back-button">Back</button>
    </Link>
    <DetailTest match = {match}></DetailTest>
    </div>)
}

export default DetailPage;
