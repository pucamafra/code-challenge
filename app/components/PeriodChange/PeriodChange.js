import React, { Component } from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';

import Icon from '../Icon/Icon';
import styles from './styles';

export default class PeriodChange extends Component {
  render() {
    return (
      <View style={styles.container}>
          <View style={styles.periodContainer}>
            <Icon name={this.props.event.category} style={styles.icon} />
            <Text style={styles.period}>{this.props.event.label}</Text>
          </View>
      </View>
    )
  };
}

PeriodChange.propTypes = {
  event : PropTypes.object.isRequired
};

module.export = PeriodChange;
