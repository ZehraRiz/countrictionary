import React, {Component} from 'react';
import Navbar from './components/Navbar'
import DetailPage from './containers/DetailPage'
import Home from './containers/Home'


import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

class App extends Component{
  state = { 
    countryList: [],
    searchField: "",
    region: "",
    darkMode: this.getInitialMode
  }


  componentDidMount(){
    fetch("https://restcountries.eu/rest/v2/all")
    .then(response => response.json())
    .then(countries => this.setState({countryList: countries}))
    .catch(err => console.log(err))
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
    localStorage.setItem("dark", JSON.stringify(this.state.darkMode))
  }

  getInitialMode = () =>{
    const savedMode = JSON.parse(localStorage.getItem('darkMode'))
    return savedMode || false
  
  }


  render(){
    const filteredCountries = this.state.countryList.filter((country)=>{
      return country.name.toLowerCase().includes(this.state.searchField.toLowerCase())
      && country.region.includes(this.state.region);
    })
  return (
    <Router>
    <div className= "App">
    <div className = {this.state.darkMode ? "dark-mode" : "light-mode"}>
    <Navbar toggleMode = {this.toggleMode} darkMode = {this.state.darkMode}></Navbar>
    <Switch>
    <Route exact strice path= '/'
    render = {()=>(<Home  
      onSearchChange = {this.onSearchChange} 
      onFilterChange = {this.onFilterChange}
      countryList ={filteredCountries}/>)}/>

    <Route path = '/:_country_name' component = {DetailPage}/>
    </Switch>

    </div>
    </div>
    </Router>
  );
}
}

export default App;

