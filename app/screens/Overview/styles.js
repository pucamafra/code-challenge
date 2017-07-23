import { StyleSheet } from 'react-native';
import { colors } from '../../config/styles';

export default StyleSheet.create({
  loadindViewContainer : {
    flex: 1,
    alignItems : 'center',
    justifyContent : 'center'
  },
  eventList: {
    borderTopWidth: 0,
    borderBottomWidth: 0,
    marginTop : 0,
    backgroundColor : colors.whitesnow
  },
});
