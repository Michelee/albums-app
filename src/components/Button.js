import React from 'react';
import { TouchableOpacity } from 'react-native';

const Button = (props) => {
  const { buttonStyle } = styles;
  return (
    <TouchableOpacity onPress={props.onPress} style={buttonStyle}>
      {props.children}
    </TouchableOpacity>
  );
};

const styles = {
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007aff',
    marginLeft: 5
  }
};

export default Button;
