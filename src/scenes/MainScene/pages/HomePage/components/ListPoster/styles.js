import {StyleSheet} from 'react-native';
import {Color} from '../../../../../../themes';

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 16,
    marginBottom: 8,
    marginHorizontal: 8,
  },
  posterContainer: {
    marginLeft: 10,
  },
  posterImage: {
    width: 115,
    height: 170,
    resizeMode: 'cover',
    borderRadius: 5,
  },
  posterImageWithPlayer: {
    borderBottomEndRadius: 0,
    borderBottomStartRadius: 0,
  },
  listPosterImage: {
    paddingRight: 8,
  },
  posterWithNumberContainer: {
    overflow: 'hidden',
    flexDirection: 'row',
    marginLeft: 0,
  },
  number: {
    position: 'absolute',
    left: -40,
    zIndex: 1,
    bottom: 0,
    height: 90,
    resizeMode: 'contain',
  },
  infoSection: {
    backgroundColor: Color.darkGray,
    borderBottomEndRadius: 5,
    borderBottomStartRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 8,
    paddingHorizontal: 5,
  },
  playIconWrapper: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;
