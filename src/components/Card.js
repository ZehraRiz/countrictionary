import React from 'react';

function Card({flag, name, population, region, capital}){
    return(
        <div className = "card">
            <img src = {flag} className ="flag" alt = "flag"></img>
            <span className = "description">
            <h2 className= "name">{name}</h2>
            <p className="population"><label>Population:&nbsp; </label>{population}</p>
            <p className="region"><label>Region:&nbsp; </label>{region} </p>
            <p className="capital"><label>Capital:&nbsp; </label> {capital}</p>
            </span>
        </div>
    )
}

export default Card;