import React, {Component} from 'react';
import Navbar from './components/Navbar'
import Filters from './components/Filters'
import Cardlist from './components/CardList'
import {countries} from "./countries"

class App extends Component{
  state = { 
    countryList: countries,
    searchField: "",
    region: "",
    darkMode: this.getInitialMode
  }

  onSearchChange = (event) =>{
    let searchField = event.target.value
    this.setState({
      searchField: searchField
    })
  }

  onFilterChange = (event)=>{
    let region = event.value
    this.setState({
      region: region
    })
  }

  toggleMode = ()=>{
    let prevMode = this.state.darkMode;
    this.setState({
      darkMode: !prevMode
    })
    localStorage.setItem('darkMode', !prevMode);
  }

getInitialMode(){
  const savedMode = localStorage.getItem('darkMode');
  return savedMode || false;
}

  render(){
    const filteredCountries = this.state.countryList.filter((country)=>{
      return country.name.toLowerCase().includes(this.state.searchField.toLowerCase())
      && country.region.includes(this.state.region);
    })
  return (
    <div className= "App">
    <div className = {this.state.darkMode ? "dark-mode":
    "light-mode"}>
    <Navbar toggleMode = {this.toggleMode} darkMode = {this.state.darkMode}></Navbar>
    <Filters onSearchChange = {this.onSearchChange} onFilterChange = {this.onFilterChange} ></Filters>
     <Cardlist countryList = {filteredCountries}></Cardlist>
    </div>
    </div>
  );
}
}

export default App;
