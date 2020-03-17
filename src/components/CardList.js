import React from 'react';
import Card from './Card'



function CardList({countryList}){
    const card = countryList.map((country, i)=>{
        return <Card key= {i}
        
        flag = {country.flag}
        name = {country.name}
        population = {country.population}
        region = {country.region}
        capital = {country.capital}
        />
   }) 
    return(<div className="card-list">
    {card}
    </div>)
}



export default CardList;