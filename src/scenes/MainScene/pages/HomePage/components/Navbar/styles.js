import {StyleSheet} from 'react-native';
import {Color} from '../../../../../../themes';

const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.white,
    paddingVertical: 5,
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    width: 35,
    height: 35,
  },
  rightContainer: {
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  profileImage: {
    width: 30,
    height: 30,
    borderRadius: 5,
  },
  searchIcon: {
    marginHorizontal: 15,
  },
});

export default styles;
