import React, { Component } from 'react';
import { ScrollView } from 'react-native';

import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            albums: []
        };
    }

    componentWillMount() {
        fetch('https://rallycoding.herokuapp.com/api/music_albums')
            .then((response) => response.json())
            .then((albums) => this.setState({albums}) )
            .catch((err) => console.log('Fetch Albums Error', err) ) ;
    }

    renderAlbums() {
        return this.state.albums.map( album =>  
            <AlbumDetail key={album.title} albumData={album} /> 
        );
    }

    render() {
        return (
            <ScrollView>
                { this.renderAlbums() }
            </ScrollView>
        );
    }
}

export default AlbumList;
