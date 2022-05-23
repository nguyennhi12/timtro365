import {Dimensions} from 'react-native';
export default setScale = size => {
  const {width, height} = Dimensions.get('window');
  const guidelineBaseWidth = 414;
  return (width / guidelineBaseWidth) * size;
};
