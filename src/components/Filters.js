import React, {Component} from 'react';
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'

class Filters extends Component{
    state = {
        showMenu: false,
        options: ['Africa', 'America', 'Asia', 'Europe', 'Oceania'],
        region: ""
    }
     regionSelected = (event)=>{
            this.setState({
                region: event.value
            })
                this.props.onFilterChange(event);
            
        }


    render(){
    return(<section className="filters">
        <input className = "search " 
        type = "search" placeholder = "Search for a country.."
        onChange = {this.props.onSearchChange}>
        </input>
        
        <Dropdown 
        options={this.state.options}  
        value ={this.state.region} 
        onChange={this.regionSelected}  
        placeholder="Filter by region" />

    </section>)
    }
}



export default Filters;