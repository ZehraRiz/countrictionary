import React, {Component} from 'react'
import Border from './Border'

class DetailTest extends Component {
    state = {
        countryName: this.props.match.params._country_name,
        countryDetails: null
    }

    componentDidMount = async() => {
        const response = await fetch(`https://restcountries.eu/rest/v2/name/${this.state.countryName}`)
        const data = await response.json()
        this.setState({countryDetails: data[0]})
        
    }


    renderDetail(){
        const country = this.state.countryDetails
        
        if (!country ){
            return <h1>loading</h1>
        }
        return(
            <div className = "detail">
        <img src = {country.flag} alt= "flag"></img>
        <div className = "detail_country">
        <p className = "detail_country_name">{country.name}</p>
        <div className = "detail_country_description_1">
            <p>Native Name: {country.nativeName}</p>
            <p>Population: {country.population}</p>
            <p>Region: {country.region}</p>
            <p>Sub Region: {country.subregion}</p>
            <p>Capital: {country.capital}</p></div>
            <div className = "detail_country_description_2">
            <p>Top LevelDomain: {country.topLevelDomain}</p>
            <p>currencies: {country.currencies[0].name}</p>
            <p>Languages: {country.languages[0].name}</p>
            </div>
            <div className = "detail_country_border">
            <p>Border Countries:</p>
            <Border borders = {country.borders}>
            </Border>
            </div>
        </div>
        </div>
        
        )
    }

    render(){
        return(<div>{this.renderDetail()}</div>)
    }

}

export default DetailTest;