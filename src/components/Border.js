import React from 'react';

function Border ({borders}){

    let neighbours = ""
    
    if(borders!= null){
     neighbours = borders.map(neighbour => {
         let neighbourName = ""
         fetch(`https://restcountries.eu/rest/v2/alpha/${neighbour}`)
         .then(response => response.json())
         .then(data => {
             data = data.name
             neighbourName = data
             return neighbourName
         });  
         return neighbourName
     })
    }  

    console.log(neighbours)

    return(
        <div className = "detail_country_border_buttons">
       {neighbours}
        </div>
    )
}


export default Border;







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