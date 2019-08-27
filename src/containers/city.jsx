import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class City extends Component {
  handleClick = () => {
    this.props.selectedCity(this.props.city)
  }

  render(){
    return (
      <div className={`list-group-item${this.props.selectCity == this.props.city ? ' selected' : ''}`}>
        <div onClick={this.handleClick}>
          {this.props.name}
        </div>
      </div>
    );
  }
}

import {selectedCity} from '../actions';

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    selectedCity: selectedCity },
    dispatch );
}

function mapReduxStateToProps(reduxState) {
  return {
    selectCity: reduxState.selectCity,
  };
}

export default connect(mapReduxStateToProps, mapDispatchToProps)(City);
