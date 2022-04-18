import { StyleSheet, Platform } from 'react-native';

// platform kiem tra he dieu hanh dang chay la android hay ios
export const styles = StyleSheet.create({
    root: {
        flex: 1,
        alignItems: 'center',
        paddingTop: Platform.OS == 'ios' ? '65%' : '60%',
        paddingLeft: 20,
        paddingRight: 20,

    },
    root_container: {
        width: '100%',
        height: 200,
        alignItems: 'center',
    },
    root_p: {
        fontSize: 20,
    },
    root_image: {
        width: 100,
        height: 100,
        marginTop: 20,
        marginBottom: 20,
    },
    root_listOfImages: {
        flexDirection: 'row',
    },
    root_listOfImages_image: {
        width: 30,
        height: 30,
        marginRight: 20,
    }
});