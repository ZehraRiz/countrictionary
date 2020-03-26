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
    done: undefined,
    countryList: [],
    searchField: "",
    region: "",
    darkMode: ""
  }



  componentDidMount(){
    fetch("https://restcountries.eu/rest/v2/all")
    .then(response => response.json())
    .then(countries => this.setState({countryList: countries}))
    .then(json => this.setState({ done: true }))
    .catch(err => console.log(err))

    const ls = JSON.parse(localStorage.getItem('darkMode'));
    if (ls === null) {
      this.setState({
        darkMode: false
      });
      localStorage.setItem('darkMode',JSON.stringify("false"));
    }
    else {
      this.setState({
        darkMode: ls
      });
    }
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
    localStorage.setItem("darkMode", JSON.stringify(!prevMode))
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
    render = {()=>(
          <Home  
      onSearchChange = {this.onSearchChange} 
      onFilterChange = {this.onFilterChange}
      countryList ={filteredCountries}
      done = {this.state.done}
      />
    )}
    />
    
    
    
    

    <Route path = '/:_country_name' component = {DetailPage}/>
    </Switch>

    </div>
    </div>
    </Router>
  );
}
}

export default App;

