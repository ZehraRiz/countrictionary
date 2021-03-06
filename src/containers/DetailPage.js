import React from 'react';
import DetailTest from '../components/Detail'
import { Link } from "react-router-dom";

function DetailPage ({match}){
    return(
    <div className = "detail-page">
    <Link to="/"><button className= "back-button">Back</button>
    </Link>
    <DetailTest match = {match}/>
    </div>)
}

export default DetailPage;
