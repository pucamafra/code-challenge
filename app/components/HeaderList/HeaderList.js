import React, {Component} from 'react';
import { View, Text, Image } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';
import images from '../../config/images'
import { FormatTime, GetDayFromDate, GetMonthFromDate, GetYearFromDate } from '../../utils/Utils';

export default class HeaderList extends Component {
  render() {
    let data = this.props.data;
    let homeTeam = data.team_data[0];
    let awayTeam = data.team_data[1];
    return (
      <View style={styles.headerContainer}>
        <Image style={styles.headerImage} source={images.cover}>

          <View style={styles.matchContainer}>

              <View style={styles.matchSubcontainer}>
                <View style={styles.shieldContainer}>
                  <Image source={{ uri: homeTeam.shield_url }} resizeMode="contain"  style={styles.teamShield}/>
                </View>
                <View style={styles.matchScoreContainer}>
                  <Text style={styles.teamScore}>{homeTeam.score}</Text>
                  <Text style={styles.matchTime}>{FormatTime(data.match_time)}</Text>
                  <Text style={styles.teamScore}>{awayTeam.score}</Text>
                </View>
                <View style={styles.shieldContainer}>
                  <Image source={{uri: awayTeam.shield_url}} resizeMode="contain" style={styles.teamShield}/>
                </View>
              </View>

              <View style={styles.teamsNameContainer}>
                <Text numberOfLines={1} style={styles.teamHome}>{homeTeam.name}</Text>
                <Text numberOfLines={1} style={styles.teamAway}>{awayTeam.name}</Text>
              </View>

              <Text style={styles.championship}>{data.competition_name}</Text>
          </View>

          <View style={styles.localDateContainer}>
            <Text style={styles.matchDay}>{GetDayFromDate(data.local_date)}</Text>
            <View style={styles.monthYearContainer}>
              <Text style={styles.matchMonthYear}>{GetMonthFromDate(data.local_date)}</Text>
              <Text style={styles.matchMonthYear}>{GetYearFromDate(data.local_date)}</Text>
            </View>
            <View style={styles.venueContainer}>
              <Text style={styles.season}>{data.season_name}</Text>
              <Text style={styles.venue}>{data.venue_name}</Text>
            </View>
          </View>

        </Image>
      </View>
    );
  }
}

HeaderList.propTypes = {
  data : PropTypes.object.isRequired
};


module.export = HeaderList;
