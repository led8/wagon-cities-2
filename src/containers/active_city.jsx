import React, { Component } from 'react';
import { connect } from 'react-redux';

class ActiveCity extends Component {
  render(){
    let block = null;
    if (this.props.selectCity === null) {
        block = <div className="active-city"></div>
    }
    else {
      const url = `https://kitt.lewagon.com/placeholder/cities/${this.props.selectCity.slug}`;
      block = <div className="active-city">
                <h3>{this.props.selectCity.name}</h3>
                <img src={url} width="100%" />
              </div>
    }

    return (
      block
    )
  }
}

function mapReduxStateToProps(reduxState) {
  return {
    selectCity: reduxState.selectCity,
  };
}

export default connect(mapReduxStateToProps, null)(ActiveCity);
