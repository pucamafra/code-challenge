import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import PropTypes from 'prop-types';

import Icon from '../Icon/Icon';
import { FormatTime } from '../../utils/Utils';
import styles from './styles';

export default class Event extends Component {
  _renderHome = () => {
    return (
      <View style={styles.container}>
        <View style={styles.homeLeftContainer}>
          <Text style={styles.playerHome}>{this.props.value}</Text>
          <Icon name={this.props.icon}/>
        </View>

        <View style={styles.timeContainer}>
          <View style={styles.line}/>
          <View style={styles.circle}/>
        </View>

        <View style={styles.homeRightContainer}>
          <Text style={styles.time}>{FormatTime(this.props.time)}</Text>
        </View>
      </View>
    );
  };

  _renderAway = () => {
    return (
      <View style={styles.container}>
        <View style={styles.awayLeftContainer}>
          <Text style={styles.time}>{FormatTime(this.props.time)}</Text>
        </View>

        <View style={styles.timeContainer}>
          <View style={styles.line}/>
          <View style={styles.circle}/>
        </View>

        <View style={styles.awayRightContainer}>
          <Icon name={this.props.icon}/>
          <Text style={styles.playerAway}>{this.props.value}</Text>
        </View>
      </View>
    );
  };

  render() {
      if(this.props.side === "home") {
        return this._renderHome();
      } else {
        return this._renderAway();
      }
  };
}

Event.propTypes = {
  icon : PropTypes.string.isRequired,
  time : PropTypes.number.isRequired,
  value : PropTypes.string.isRequired,
  side : PropTypes.string.isRequired,
};

module.export = Event;
