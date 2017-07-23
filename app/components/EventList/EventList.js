import React, { Component } from 'react';
import { Text, View, FlatList } from 'react-native';
import { List } from "react-native-elements";
import styles from './styles';
import PropTypes from 'prop-types';

import HeaderList from '../HeaderList/HeaderList';
import PeriodChange from '../PeriodChange/PeriodChange';
import Event from '../Event/Event';

export default class EventList extends Component {
  _renderHeader = (data) => {
    return (
      <HeaderList data={data}/>
    );
  };

  _renderSeparator = () => {
    return (
      <View style={styles.separatorContainer}>
        <View style={styles.separator} />
      </View>
    );
  };

  _keyExtractor = (item, index) => {
    return index;
  };

  _renderItems({item}) {
    let isSubstitution = item.category == 'substitution_off' || item.category == 'substitution_on';
    let isPeriodChange = item.category == 'period_change';

    if(isPeriodChange){
      return (
        <PeriodChange event={item}/>
      );
    }

    if(isSubstitution){
      return (
        <Event icon={item.category} time={item.time} value={item.label} side={item.side}/>
      );
    }

    return (
      <Event icon={item.value} time= {item.time} value={item.label} side={item.side}/>
    );
  }

  render() {
    return (
      <List containerStyle={this.props.containerStyle}>
        <FlatList
          data={this.props.data.events.reverse()}
          renderItem={this._renderItems}
          keyExtractor={this._keyExtractor}
          ItemSeparatorComponent={this._renderSeparator}
          ListHeaderComponent={this._renderHeader(this.props.data)}
        />
      </List>
    );
  };
}

EventList.propTypes = {
  data : PropTypes.object.isRequired
};

module.export = EventList;
