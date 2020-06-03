import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import DetailPage from './containers/DetailPage';
import Home from './containers/Home';

class App extends Component {
  state = {
    darkMode: false,
    countryList: [],
    done: false,

    searchField: '',
    region: '',
  };

  async componentDidMount() {
    // Get countries
    const response = await fetch('https://restcountries.eu/rest/v2/all');
    const countryList = await response.json();

    // Get theme
    const darkMode = this.getThemeMode();

    // Update state
    const done = true;
    this.setState({
      countryList,
      darkMode,
      done,
    });
  }

  getThemeMode() {
    if (localStorage.getItem('darkMode') === 'true') return true;
    else return false;
  }

  onSearchChange = event => {
    let searchField = event.target.value;
    this.setState({
      searchField: searchField,
    });
  };

  onFilterChange = event => {
    let region = event.value;
    this.setState({
      region: region,
    });
  };

  toggleMode = () => {
    const otherMode = !this.getThemeMode();
    localStorage.setItem('darkMode', otherMode.toString());
    this.setState({
      darkMode: otherMode,
    });
  };

  render() {
    const filteredCountries = this.state.countryList.filter(country => {
      return (
        country.name
          .toLowerCase()
          .includes(this.state.searchField.toLowerCase()) &&
        country.region.includes(this.state.region)
      );
    });

    return (
      <Router>
        <div className="App">
          <div className={this.state.darkMode ? 'dark-mode' : 'light-mode'}>
            <Navbar
              toggleMode={this.toggleMode}
              darkMode={this.state.darkMode}
            ></Navbar>
            <Switch>
              <Route
                exact
                strice
                path="/"
                render={() => (
                  <Home
                    onSearchChange={this.onSearchChange}
                    onFilterChange={this.onFilterChange}
                    countryList={filteredCountries}
                    done={this.state.done}
                  />
                )}
              />

              <Route path="/:_country_name" component={DetailPage} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
