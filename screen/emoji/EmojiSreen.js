import { Text, View, TouchableOpacity, Image } from 'react-native'
import React, { Component } from 'react'
import { styles } from './styles/EmojiStyles'
export default class EmojiSreen extends Component {
    state = {
        image: require('../../asset/emoji/love.png')
    }
    renderRoot = () => {
        return (
            <View style={styles.root}>
                <View style={styles.root_container}>
                    <Text style={styles.root_p}>Ban dang cam thay nhu the nao?</Text>
                    <Image style={styles.root_image} source={this.state.image} />
                    <View style={styles.root_listOfImages}>

                        {dataImage.map((item, index) => {
                            return (
                                <TouchableOpacity onPress={() => this.setState({ image: item.path })}>
                                    <Image style={styles.root_listOfImages_image} source={item.path} />

                                </TouchableOpacity>

                            )
                        })}
                    </View>
                </View>
            </View>
        )
    }
    render() {
        return (
            <View>
                {this.renderRoot()}
            </View>
        )
    }
}


const dataImage = [
    {
        name: 'love',
        path: require('../../asset/emoji/love.png')
    }
    ,
    {
        name: 'haha',
        path: require('../../asset/emoji/haha.png')
    }
    ,
    {
        name: 'sad',
        path: require('../../asset/emoji/sad.png')
    }
    ,
    {
        name: 'angry',
        path: require('../../asset/emoji/angry.png')
    }
    ,
    {
        name: 'care',
        path: require('../../asset/emoji/care.png')
    }
    ,
    {
        name: 'like',
        path: require('../../asset/emoji/like.png')
    }
]
