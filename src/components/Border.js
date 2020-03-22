import React, {useEffect, useState} from 'react';


function Border({borders}){
const [countries , setCountries] = useState([]);

useEffect(()=>{getCountries();
},[])

const getCountries = async () =>{
        let myArr = []
        if(borders!= null){
             borders.map(async(country) => {
                const response = await fetch(`https://restcountries.eu/rest/v2/alpha/${country}`)
                const data = await response.json()
                myArr.push(data)
            })
            setCountries(myArr)
        };
    }

    if (!countries){
        return <div>Loading...</div>
    }

    console.log(countries)
return(
    <div className = "detail_country_border_buttons">
    {countries.map(country => <button key= {country.name} > {country.name} </button>)}
    </div>

)
}
export default Border;





 /* import React, {Component} from 'react';

class Border extends Component{
    
    state = {
        borderCountries : "",
        borderCountriesButtons: ""
    }

    componentDidMount(){
        const borders = this.props.borders;
        let myArr = []
        let mybtns = []
        if(borders!= null){
             borders.map(async(country) => {
                const response = await fetch(`https://restcountries.eu/rest/v2/alpha/${country}`)
                const data = await response.json()
                myArr.push(data)
            })
        }
            this.setState({borderCountries:myArr});
            
                mybtns = myArr.map(country=>{
                    return <button key= {country.name}>{country.name}</button>})
                    this.setState({borderCountriesButtons: mybtns})
    

    console.log(mybtns)
    }
    render(){ 
        console.log(this.state.borderCountriesButtons)
            return(<div>{this.state.borderCountriesButtons}</div>)
        }
        //console.log(borderCountries)
        /* let buttons =  borderCountries.map(country=>{ 
            return <button key= {country.name}>{country.name}</button>
        }) 
             
    }

export default Border;
 



 */