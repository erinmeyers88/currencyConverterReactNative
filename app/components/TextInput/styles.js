import EStyleSheet from 'react-native-extended-stylesheet';
import {StyleSheet} from 'react-native';

const inputHeight = 48;
const borderRadius = 4;

export default EStyleSheet.create({

  $buttonBackgroundColorBase: '$white',
  $buttonBackgroundColorModifier: .1,

  container: {
    backgroundColor: '$white',
    width: '90%',
    height: inputHeight,
    borderRadius: borderRadius,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 11
  },
  containerDisabled: {
    backgroundColor: '$lightGray'
  },
  buttonContainer: {
    height: inputHeight,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '$white',
    borderTopLeftRadius: borderRadius,
    borderBottomLeftRadius: borderRadius
  },
  buttonText: {
    fontWeight: '600',
    fontSize: 20,
    paddingHorizontal: 16,
    color: '$primaryBlue'
  },
  input: {
    height: inputHeight,
    fontSize: 18,
    paddingHorizontal: 8,
    color: '$inputText',
    width: '100%',
    flex: 1
  },
  border: {
    height: inputHeight,
    width: StyleSheet.hairlineWidth,
    backgroundColor: '$border'
  }
});