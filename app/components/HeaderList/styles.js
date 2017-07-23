import { StyleSheet , Dimensions} from 'react-native';
import { colors } from '../../config/styles';

let imageHeight = 250;
let shieldSize = 80;

export default StyleSheet.create({
  headerContainer: {
    height : imageHeight ,
  },
  headerImage: {
    width: Dimensions.get('window').width,
    height : imageHeight
  },
  matchContainer: {
    flex: 1,
    alignItems :'center',
    justifyContent: 'center',
    top: 10,
    marginBottom: 5
  },
  matchSubcontainer: {
    flexDirection : 'row',
    alignItems :'center'
  },
  shieldContainer : {
    flex: 1,
    alignItems : 'center'
  },
  matchScoreContainer : {
    flex: 1,
    flexDirection : 'row',
    alignItems : 'center',
    justifyContent: 'center'
  },
  teamShield: {
    width: shieldSize,
    height : shieldSize
  },
  teamsNameContainer : {
    flexDirection : 'row',
    alignItems : 'center',
    justifyContent: 'center'
  },
  teamHome : {
    flex : 1,
    textAlign: 'left',
    marginLeft: 20,
    fontSize : 14,
    color: 'white',
    backgroundColor:'rgba(0,0,0,0)'//iOS
  },
  teamAway : {
    flex : 1,
    textAlign: 'right',
    marginRight: 20,
    fontSize : 14,
    color: 'white',
    backgroundColor:'rgba(0,0,0,0)'//iOS
  },
  teamScore: {
    fontSize: 50,
    textAlign: 'center',
    color: 'white',
    margin: 15,
    backgroundColor:'rgba(0,0,0,0)'//iOS
  },
  matchTime: {
    fontSize: 20,
    textAlign: 'center',
    color: colors.green,
    backgroundColor:'rgba(0,0,0,0)'//iOS
  },
  championship: {
    fontSize: 17,
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    marginTop : 5,
    backgroundColor:'rgba(0,0,0,0)' //iOS
  },
  localDateContainer : {
    flexDirection : 'row'
  },
  matchDay: {
    fontSize: 37,
    color: 'white',
    marginLeft : 10,
    backgroundColor:'rgba(0,0,0,0)'//iOS
  },
  monthYearContainer : {
    justifyContent: 'center',
    marginLeft : 5
  },
  matchMonthYear: {
    fontSize: 15,
    color: 'white',
    fontWeight: 'bold',
    backgroundColor:'rgba(0,0,0,0)'//iOS
  },
  venueContainer :{
    justifyContent: 'center',
    marginLeft : 10,
    flex: 1,
  },
  season: {
    fontSize: 15,
    color: 'white',
    backgroundColor:'rgba(0,0,0,0)'//iOS
  },
  venue: {
    fontSize: 14,
    color: 'white',
    fontWeight: 'bold',
    marginRight: 10,
    backgroundColor:'rgba(0,0,0,0)'//iOS
  },
});
