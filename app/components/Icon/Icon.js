import React, { Component } from 'react';
import { Image } from 'react-native';
import styles from './styles';
import PropTypes from 'prop-types';

export const images = {
  'period_change'  : require('../../images/whistle.png'),
  'Missed'  : require('../../images/missed.png'),
  'Scored'    : require('../../images/scored.png'),
  'Yellow'    : require('../../images/yellow.png'),
  'SecondYellow'    : require('../../images/second_yellow.png'),
  'Red'    : require('../../images/red.png'),
  'Goal'    : require('../../images/goal.png'),
  'OwnGoal'    : require('../../images/own_goal.png'),
  'Saved'    : require('../../images/saved.png'),
  'substitution_off'    : require('../../images/substitution_off.png'),
  'substitution_on'    : require('../../images/substitution_on.png')
}

export default class Icon extends Component {
  render() {
      var size = this.props.size;
      const image = images[this.props.name]
      return (
        <Image source={image} style={[styles.icon,this.props.style]}/>
      );
  };
}

Icon.propTypes = {
  name : PropTypes.string.isRequired
};

module.export = Icon;
