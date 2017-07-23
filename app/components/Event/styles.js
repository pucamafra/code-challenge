import { StyleSheet } from 'react-native';
import { colors } from '../../config/styles';

let lineHeight = 45;
let circleSize = 24;

export default StyleSheet.create({
  container : {
    flexDirection:'row',
    height:lineHeight
  },
  homeLeftContainer : {
    flex:0.45,
    alignItems : 'center',
    flexDirection : 'row',
    justifyContent : 'flex-end'
  },
  homeRightContainer : {
    flex: 0.45,
    justifyContent : 'center',
  },
  awayRightContainer : {
    flex:0.45,
    alignItems : 'center',
    flexDirection : 'row'
  },
  awayLeftContainer : {
    flex: 0.45,
    justifyContent : 'center',
    alignItems : 'flex-end'
  },
  timeContainer : {
    width: circleSize,
    alignItems: 'center',
    justifyContent : 'center',
  },
  circle : {
    backgroundColor : colors.green ,
    position: 'absolute',
    height: circleSize / 2,
    width: circleSize / 2,
    borderRadius: circleSize / 4
  },
  line : {
    flex : 1,
    width: 5,
    backgroundColor: colors.green,
  },
  time : {
    fontSize : 15,
  },
  playerHome : {
    marginLeft : 20,
    marginRight : 5,
    fontSize : 14
  },
  playerAway : {
    marginLeft : 5,
    marginRight : 20,
    fontSize : 14
  }
});
