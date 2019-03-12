import React, { Component } from 'react';
import { Text, View } from 'react-native';

class AlbumList extends Component { 
  state = {
    albums: []
  }

  componentWillMount() {
    fetch('https://rallycoding.herokuapp.com/api/music_albums', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    }).then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          albums: responseJson
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    const { viewStyle, textStyles } = styles;
    console.log(this.state.albums);
    return (
      <View style={viewStyle}>
        {
          this.state.albums.map((item, index) => (
            <Text key={index} style={textStyles}>{item.title}</Text>
          ))
        }
      </View>
    );
  }
}

const styles = {
  textStyles: {
    fontSize: 16,
    color: 'black'
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

export default AlbumList;
