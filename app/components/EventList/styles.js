import { StyleSheet } from 'react-native';
import { colors } from '../../config/styles';

let separatorHeight = 10;
let separatorWidth = 5;

export default StyleSheet.create({
  separatorContainer: {
    alignItems : 'center',
    justifyContent : 'center'
  },
  separator: {
    height: separatorHeight,
    width: separatorWidth,
    backgroundColor: colors.green
  },
  loadindViewContainer : {
    flex: 1,
    alignItems : 'center',
    justifyContent : 'center'
  }
});
