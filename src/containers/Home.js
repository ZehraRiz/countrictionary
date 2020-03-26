import React from 'react';
import Filters from '../components/Filters'
import CardList from  '../components/CardList'
import Loading from '../components/Loading'


function Home({onSearchChange, onFilterChange, countryList, done}){
    return(
        <div className = "home">
            <Filters onSearchChange = {onSearchChange} onFilterChange = {onFilterChange} ></Filters>
            {!done ? (
          <Loading />
        ) : (
            <CardList countryList= {countryList}></CardList>
        )}
        </div>
    )
}

export default Home;