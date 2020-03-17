import React from 'react';
import Filters from '../components/Filters'
import CardList from  '../components/CardList'

function Home({onSearchChange, onFilterChange, countryList}){
    return(
        <div className = "home">
            <Filters onSearchChange = {onSearchChange} onFilterChange = {onFilterChange} ></Filters>
            <CardList countryList= {countryList}></CardList>
        </div>
    )
}

export default Home;