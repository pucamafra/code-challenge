import { StyleSheet } from 'react-native';
import { colors } from '../../config/styles';

export default StyleSheet.create({
  container : {
    flex: 1,
    flexDirection : 'row',
    alignItems : 'center',
    justifyContent : 'center'
  },
  periodContainer : {
    flexDirection : 'row',
    backgroundColor : colors.grey,
    borderRadius:15,
    borderWidth: 1,
    borderColor: colors.grey,
    marginTop : 10,
    marginBottom: 10,
    alignItems : 'center',
    justifyContent : 'center',
  },
  period : {
    marginLeft: 5,
    marginRight: 15,
    marginTop: 5,
    marginBottom: 5,
    fontSize: 15
  },
  icon: {
    marginLeft: 10,
  }
});
