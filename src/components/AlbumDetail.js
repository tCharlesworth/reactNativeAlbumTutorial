import React from 'react';
import { View, Text, Image, Linking } from 'react-native';

import Button from './Button';
import Card from './Card';
import CardItem from './CardItem';

const AlbumDetail = ({ albumData }) => {
    const { title, artist, thumbnail_image, image, url } = albumData;
    const { 
            thumbnailStyle, 
            textContainerStyle, 
            thumbnailContainerStyle, 
            textFontStyle,
            albumArtworkStyle
    } = styles;

    return (
        <Card>
            <CardItem>
                <View style={thumbnailContainerStyle}>
                    <Image
                        style={thumbnailStyle}
                        source={{uri: thumbnail_image}} />
                </View>
                <View style={textContainerStyle}>
                    <Text style={textFontStyle}>{title}</Text>
                    <Text>{artist}</Text>
                </View>
            </CardItem>

            <CardItem>
                <Image
                    style={albumArtworkStyle}
                    source={{ uri: image }} />
            </CardItem>

            <CardItem>
                <Button onPress={ () => Linking.openURL(url) } buttonTitle="Buy Now" />
            </CardItem>
        </Card>
    );
};

const styles = {
    thumbnailStyle: {
        width: 50,
        height: 50
    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    },
    textContainerStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    textFontStyle: {
        fontSize: 18
    },
    albumArtworkStyle: {
        height: 300,
        flex: 1,
        width: null
    }
};

export default AlbumDetail;