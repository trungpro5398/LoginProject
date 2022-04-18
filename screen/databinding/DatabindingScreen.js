import { Text, View, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import { styles } from './styles/DataBindingStyles'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCamera, faPenClip, faEllipsis, faHeart } from '@fortawesome/free-solid-svg-icons'
export default class DatabindingScreen extends Component {
    state = {
        isClickedHeart: false,
        heartColor: 'white',
        numberOfLike: 2,

    }
    renderHeader = () => {
        return (
            <View style={styles.container_header}>
                <View style={styles.header}>
                    <FontAwesomeIcon icon={faCamera} size={25} />
                    <Text style={styles.header_text}> Feed</Text>
                    <FontAwesomeIcon icon={faPenClip} size={25} />
                </View>
            </View>
        )
    }
    renderBody = () => {
        return (
            <View style={styles.container_avatar}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false} >
                    {
                        dataAvatar.map((item, index) => {
                            return (
                                <View style={styles.avatar} key={index}>
                                    <Image source={item.image} style={styles.container_avatar__image} />
                                    <Text style={styles.container_avatar__name}>{item.name}</Text>
                                </View>
                            )
                        })
                    }
                </ScrollView>
            </View>
        )
    }
    clicked = (isClicked) => {
        this.setState({
            heartColor: !isClicked ? 'red' : 'white',
            numberOfLike: isClicked ? this.state.numberOfLike - 1 : this.state.numberOfLike + 1,
            isClickedHeart: !isClicked,

        })
    }
    renderFeed = () => {
        return (
            <View style={styles.container_feed}>
                <ScrollView showsHorizontalScrollIndicator={false}>
                    {
                        dataFeeds.map((item, index) => {
                            return (
                                <View style={styles.container_feed_sub}>
                                    <View style={styles.container_feed_sub_header}>
                                        <View style={styles.container_feed_sub_header_avatar}>
                                            <Image source={item.image} style={styles.container_feed_sub_header_avatar_image} />
                                        </View>
                                        <View style={styles.container_feed_sub_header_container}>
                                            <View >
                                                <View style={styles.container_feed_sub_header_container_title}>
                                                    <Text style={{ fontSize: 16 }}>
                                                        {item.title}
                                                    </Text>
                                                    <FontAwesomeIcon icon={faEllipsis} size={20} />
                                                </View>
                                                <View style={styles.container_feed_sub_header_container_text}>
                                                    <Text style={styles.container_feed_sub_header_container_text_name_time}>{item.name}</Text>
                                                    <Text style={styles.container_feed_sub_header_container_text_name_time}>{item.time}</Text>

                                                </View>
                                            </View>
                                        </View>
                                    </View>
                                    <View style={styles.container_feed_sub_body}>
                                        <Text style={{ fontSize: 16 }}>
                                            {item.content}
                                        </Text>
                                        <View style={styles.container_feed_sub_body_container}>
                                            <TouchableOpacity style={styles.container_feed_sub_body_container_heart}
                                                onPress={() => this.clicked(this.state.isClickedHeart)}
                                            >
                                                <View >
                                                    <FontAwesomeIcon icon={faHeart} size={20} color={this.state.heartColor} />
                                                </View>
                                            </TouchableOpacity>
                                            <Text style={{ fontSize: 28, marginLeft: 10, marginRight: 20 }}>{this.state.numberOfLike}</Text>
                                            <Image source={require('../../asset/comment.png')} style={styles.container_feed_sub_body_image} />
                                            <Text style={{ fontSize: 28, marginLeft: 10 }}>4</Text>
                                        </View>
                                    </View>

                                </View>
                            )
                        })
                    }
                </ScrollView>
            </View>
        )
    }
    render() {


        return (
            <View style={styles.root}>
                {this.renderHeader()}
                {this.renderBody()}
                {this.renderFeed()}
            </View>
        )
    }
}
const dataAvatar = [
    {
        name: 'Sahara',
        image: require('../../asset/images/image1.jpeg'),
    },
    {
        name: 'Sophia',
        image: require('../../asset/images/image2.jpeg'),
    },
    {
        name: 'Hana',
        image: require('../../asset/images/image3.jpeg'),
    },
    {
        name: 'Naul',
        image: require('../../asset/images/image4.jpeg'),
    },
    {
        name: 'Kimihana',
        image: require('../../asset/images/image5.jpeg'),
    },
    {
        name: 'Yoko',
        image: require('../../asset/images/image6.jpeg'),
    },
    {
        name: 'Su',
        image: require('../../asset/images/image7.jpeg'),
    },
    {
        name: 'Finnia',
        image: require('../../asset/images/image8.jpeg'),
    },
    {
        name: 'Subana',
        image: require('../../asset/images/image9.jpeg'),
    },
    {
        name: 'Corohe',
        image: require('../../asset/images/image10.jpeg'),
    }
]

const dataFeeds = [
    {
        title: "Lorem Ipsum is simply dummy text",
        name: "Sahara",
        image: require('../../asset/images/image1.jpeg'),
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
        time: "1 minutes"
    },
    {
        title: "Lorem Ipsum is simply dummy text",
        name: "Sophia",
        image: require('../../asset/images/image2.jpeg'),
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
        time: "3 minutes"

    },
    {
        title: "Lorem Ipsum is simply dummy text",
        name: "Hana",
        image: require('../../asset/images/image3.jpeg'),
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
        time: "5 minutes"

    },
    {
        title: "Lorem Ipsum is simply dummy text",
        name: "Naul",
        image: require('../../asset/images/image4.jpeg'),
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
        time: "10 minutes"
    },
    {
        title: "Lorem Ipsum is simply dummy text",
        name: "Kimihana",
        image: require('../../asset/images/image5.jpeg'),
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
        time: "1 minutes"
    }
]