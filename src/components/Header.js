import React from 'react';
import { Text, View } from 'react-native';

const Header = (props) => {
  const { textStyles, viewStyle } = styles;
  return (
    <View style={viewStyle}>
      <Text style={textStyles}>{props.headerText}</Text>
    </View>
  );
};

const styles = {
  textStyles: {
    fontSize: 20,
  },
  viewStyle: {
    backgroundColor: '#F8F8F8',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 100,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,

    position: 'relative'
  }
};

export default Header;
