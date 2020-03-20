import React, {useState, useEffect} from 'react';
import Border from "./Border"

 function Detail ({match}) {
    useEffect(()=> {
        fetchItem();
    }, []);

    const [name, setName] =useState()
    const [flag, setFlag] =useState()
    const [nativeName, setNativeName] =useState()
    const [population, setPopulation] =useState()
    const [region, setRegion] =useState()
    const [subRegion, setSubRegion] =useState()
    const [captial, setCapital] =useState()
    const [topLevelDomain, setTopLevelDomain] =useState()
    const [currencies, setCurrencies] =useState()
    const [languages, setLanguages] =useState()
    const [borders, setBorders] = useState()

    
    
    const fetchItem = async () =>{
        const fetchItem = await fetch(`https://restcountries.eu/rest/v2/name/${match.params._country_name}`)
        const item = await fetchItem.json();
        setName(item[0].name);
        setFlag(item[0].flag);
        setNativeName(item[0].nativeName);
        setPopulation(item[0].population);
        setRegion(item[0].region);
        setSubRegion(item[0].subregion);
        setCapital(item[0].capital);
        setTopLevelDomain(item[0].topLevelDomain);
        setCurrencies(item[0].currencies[0].name)
        setLanguages(item[0].languages[0].name);
        setBorders(item[0].borders);
        

    }
    return(
        <div className = "detail">
        <img src = {flag} alt= "flag"></img>
        <div className = "detail_country">
        <p className = "detail_country_name">{name}</p>
        <div className = "detail_country_description_1">
            <p>Native Name: {nativeName}</p>
            <p>Population: {population}</p>
            <p>Region: {region}</p>
            <p>Sub Region: {subRegion}</p>
            <p>Capital: {captial}</p></div>
            <div className = "detail_country_description_2">
            <p>Top LevelDomain: {topLevelDomain}</p>
            <p>currencies: {currencies}</p>
            <p>Languages: {languages}</p></div>
            <div className = "detail_country_border">
            <p>Border Countries:</p>
            <Border borders = {borders}></Border>
            </div>
        </div>
        </div>
    )
}

export default Detail; 