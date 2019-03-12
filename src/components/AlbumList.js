import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component { 
  state = {
    albums: []
  }

  componentWillMount() {
    // eslint-disable-next-line no-undef
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
    const { viewStyle } = styles;
    return (
      <ScrollView style={viewStyle}>
        {
          this.state.albums.map((item, index) => (
            <AlbumDetail key={index} album={item} />
          ))
        }
      </ScrollView>
    );
  }
}

const styles = {
  viewStyle: {
    backgroundColor: '#F8F8F8',
    height: '100%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    position: 'relative'
  }
};

export default AlbumList;
