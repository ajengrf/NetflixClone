import {Icons} from '../../../../../../../assets';

export const getNumber = index => {
  switch (index) {
    case 0:
      return Icons.numberOne;
    case 1:
      return Icons.numberTwo;
    case 2:
      return Icons.numberThree;
    case 3:
      return Icons.numberFour;
    case 4:
      return Icons.numberFive;
    default:
      return null;
  }
};
