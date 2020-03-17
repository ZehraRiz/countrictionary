import React from 'react';
import {Link} from 'react-router-dom'

function Card({flag, name, population, region, capital}){
    return(
        <div className = "card">
        <Link to ={`/${name}`} >
            <img src = {flag} className ="flag" alt = "flag"></img>
            <span className = "description">
            <h2 className= "name">{name}</h2>
            <p className="population"><label>Population:&nbsp; </label>{population}</p>
            <p className="region"><label>Region:&nbsp; </label>{region} </p>
            <p className="capital"><label>Capital:&nbsp; </label> {capital}</p>
            </span></Link>
        </div>
    )
}

export default Card;