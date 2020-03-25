import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class DetailTest extends Component {
    constructor(props) {
        super(props);
        this.state = {
            country: this.props.match.params._country_name,
            countryDetails: null,
            borderCountries: []
    }
      }
    

      componentDidUpdate(prevProps) {
        // Typical usage (don't forget to compare props):
        if (this.props.match.params._country_name !== prevProps.match.params._country_name) {
          this.setState({country: this.props.match.params._country_name})
          this.callFetch(this.props.match.params._country_name)
        }
      }
    componentDidMount = async() => {
        this.callFetch(this.state.country);
    }

    callFetch = async(country) => {
        const response = await fetch(`https://restcountries.eu/rest/v2/name/${country}`)
        const data = await response.json()
        this.setState({countryDetails: data[0]})
        this.getCountries()
        } 

        getCountries = async () =>{
            let myArr = this.state.countryDetails.borders.map(async(country) => {
                    const response = await fetch(`https://restcountries.eu/rest/v2/alpha/${country}`)
                    const data = await response.json()
                    return data.name
                })

                 const resolved = await Promise.all(myArr)
                  this.setState({borderCountries: resolved})
            }

    



    render(){
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
            <div className = "detail_country_border_buttons">
          {this.state.borderCountries.map(c=> <Link key= {c} to ={`/${c}`} >
          <button > {c} </button>
          </Link>
          )}
          </div>

            </div>
        </div>
        </div>
        
        )
    }


}

export default DetailTest;