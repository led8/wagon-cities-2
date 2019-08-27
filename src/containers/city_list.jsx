import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import City from './city';

class CityList extends Component {
  componentWillMount(){
    this.props.displayCities();
  }

  render(){
    return (
      this.props.cities.map(city => <City city={city} key={city.slug} name={city.name} address={city.address} slug={city.slug} />)
    );
  }
}

import {displayCities} from '../actions';

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    displayCities: displayCities },
    dispatch );
}

function mapReduxStateToProps(reduxState) {
  return {
    cities: reduxState.cities,
  };
}

export default connect(mapReduxStateToProps, mapDispatchToProps)(CityList);
