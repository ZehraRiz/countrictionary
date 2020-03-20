import React, {Component} from 'react';

class Border extends Component{
    
    state = {
        borderCountries : []
    }

    componentDidMount(){
        const borders = this.props.borders;
        let myArr = []
        if(borders!= null){
             borders.map(async(country) => {
                const response = await fetch(`https://restcountries.eu/rest/v2/alpha/${country}`)
                const data = await response.json()
                myArr.push(data)
            })
            this.setState({borderCountries:myArr})
            console.log(this.state.borderCountries)
        }
    }

    render(){
        const borderCountries = this.state.borderCountries;
        let borderCountriesButtons = borderCountries.map(country=>{ 
            return <button key= {country.name}>{country.name}</button>
        })
        
        if (!borderCountries){
            return <h1>loading</h1>
        }
        
        
        return(
            <div className = "detail_country_border_buttons"> 
            {borderCountriesButtons}</div>
        )
    }
        
    



}
export default Border;




/* const [boderCountries, setBorderCuntries] = useState([]) 

    useEffect( ()=> {
        getBorderCountries()
    }, []);



    const getBorderCountries = () => {
    if(borders!= null){
     let neighbours = borders.map(neighbour => {
         fetch(`https://restcountries.eu/rest/v2/alpha/${neighbour}`)
         .then(response => response.json())
         .then(data => {
             console.log(data)});  
     })
    }  else console.log("null border")
    }

    


    return(
        <div className = "detail_country_border_buttons">
       
        </div>) */


/* import React, {Component} from 'react';

class Border extends Component{
    state ={
        neghibour: null
    }

    componentDidMount(){
        this.props.borders.map(border => 
        fetch(`https://restcountries.eu/rest/v2/alpha/${border}`)
        .then(response => response.json())
        .then(countries => this.setState({neghibour: countries})))
      }
    
    render(){
    return(
        <div className = "detail_country_border_buttons">
       <button>neghibour 1</button>
                <button>neghibour 2</button>
                <button>neghibour 3</button>
        </div>
    )
}
}

export default Border; */