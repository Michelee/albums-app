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

  renderAlbums() {

  }
  
  render() {
    const { albums } = this.state;
    const { viewStyle } = styles;
    return (
      <View style={viewStyle}>
        <Text>Album List</Text>
      </View>
    );
  }
}

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

export default AlbumList;
