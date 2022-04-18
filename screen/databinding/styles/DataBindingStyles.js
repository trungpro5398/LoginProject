import { StyleSheet, Platform } from 'react-native';

// platform kiem tra he dieu hanh dang chay la android hay ios
export const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: '#E9EBEE'
    },
    container_header: {
        backgroundColor: '#FFF',
        height: Platform.OS == 'ios' ? 100 : 56,
        paddingTop: Platform.OS == 'ios' ? 64 : 20,
        paddingLeft: 20,
        paddingRight: 20
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    header__text: {
        fontSize: 16,
        fontWeight: '500'
    },
    container_avatar: {
        height: 100,
        marginTop: 1,
    },
    avatar: {
        margin: 10,
        alignItems: 'center',
    },
    container_avatar__image: {
        width: 56,
        height: 56,
        borderRadius: 28,
    },
    container_avatar__name: {
        fontSize: 14,

    },
    container_feed: {
        paddingLeft: 10,
        paddingRight: 10
    },
    container_feed_sub_header: {
        flexDirection: 'row',
    },
    container_feed_sub_header_avatar: {
        flex: 1,
    },
    container_feed_sub_header_avatar_image: {
        width: 56,
        height: 56,
        borderRadius: 28,
    },
    container_feed_sub_header_container: {
        flex: 5,
        marginLeft: 10,

    },
    container_feed_sub_header_container_title: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    container_feed_sub_header_container_text: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingRight: 100,
    },
    container_feed_sub_header_container_text_name_time: {
        fontSize: 16,
        color: '#BDBDBD',
    },
    container_feed_sub_body: {
        marginTop: 10,
        marginBottom: 10,
    },
    container_feed_sub_body_container: {
        flexDirection: 'row',
        marginTop: 10,
        marginBottom: 10,
    },
    container_feed_sub_body_container_heart: {
        width: 40,
        height: 40,
        backgroundColor: 'black',
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
    },
    container_feed_sub_body_image: {
        width: 40,
        height: 40,
    }
});