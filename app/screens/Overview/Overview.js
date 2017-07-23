import React, { Component } from 'react';
import { Text, View, StatusBar, FlatList, ActivityIndicator } from 'react-native';
import { List } from "react-native-elements";
import styles from './styles';

import MatchOverviewApi from '../../api/MockMatchOverviewApi';
import EventList from '../../components/EventList/EventList';

export default class Overview extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      isLoading: true
    }
  }

  componentDidMount() {
    MatchOverviewApi.getMatchOverview()
              .then((data) => {
                this.setState({
                  data: data,
                  isLoading: false,
                });
              }).catch((error) => {
                  console.log("Api call error");
              });
  };

  _renderLoadingView() {
    return (
      <View style={styles.loadindViewContainer}>
        <ActivityIndicator />
      </View>
    );
  };

  render() {
    if (this.state.isLoading) {
       return this._renderLoadingView();
    }

    return (
      <View>
        <StatusBar hidden={true} />
        <EventList data={this.state.data} containerStyle={styles.eventList}/>
      </View>
    );
  };
}

module.export = Overview;
