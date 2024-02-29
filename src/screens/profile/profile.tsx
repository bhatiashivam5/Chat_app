import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View, Dimensions } from 'react-native'
import React from 'react';
import BackIcon from "../../assets/ProfileScreen/Icon.svg"
import CameraIcon from "../../assets/ProfileScreen/camera.svg"
import ProfileIcon from "../../assets/ProfileScreen/Icon Outlines.svg"
import PensilIcon from "../../assets/ProfileScreen/pencil-alt.svg"
import AboutIcon from "../../assets/ProfileScreen/exclamation-circle.svg"
import PhoneIcon from "../../assets/ProfileScreen/phone-outgoing.svg"

const ProfileScreen = () => {
    const [userName, onChangeUserName] = React.useState<string>('Shivam Bhatia');
    const [userAbout, onChangeUserAbout] = React.useState<string>('🌟 Welcome to my world! 🌟 📸 Capturing moments, one photo at a time 📸 🌈 Lover of all things colorful 🌈 🎨 Artist at heart 🎨');
    const [phoneNumber, onChangePhoneNumber] = React.useState<string>('6283479730');

    const screenWidth = Dimensions.get('window').width;
    const screenHeight = Dimensions.get('window').height;

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <View style={styles.profileContainer}>
                    <View style={{ flexDirection: 'row' }}>
                        <View>
                            <Image style={[styles.image, { width: screenWidth * 0.4, height: screenWidth * 0.4, aspectRatio: 1 }]} source={require('../../assets/ProfileScreen/Profile.png')} />
                            <TouchableOpacity style={{ alignItems: 'flex-end', top: -40 }}>
                                <CameraIcon />
                            </TouchableOpacity>
                        </View>
                        <Text style={styles.userName}>Shivam Bhatia</Text>
                    </View>
                    <View style={styles.inputContainer}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 15, marginBottom: 15 }}>
                            <ProfileIcon />
                            <TextInput
                                style={[styles.input, { width: screenWidth * 0.7 }]}
                                onChangeText={onChangeUserName}
                                value={userName}
                                placeholder="Username..."
                                keyboardType="default"
                            />
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 15, marginBottom: 15 }}>
                            <AboutIcon />
                            <TextInput
                                style={[styles.input, { width: screenWidth * 0.7 }]}
                                editable
                                multiline
                                numberOfLines={8}
                                maxLength={70}
                                onChangeText={onChangeUserAbout}
                                value={userAbout}
                                placeholder="Username..."
                                keyboardType="default"
                            />
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 15, marginBottom: 15 }}>
                            <PhoneIcon />
                            <TextInput
                                style={[styles.input, { width: screenWidth * 0.7 }]}
                                onChangeText={onChangePhoneNumber}
                                value={phoneNumber}
                                placeholder="Username..."
                                keyboardType="default"
                            />
                        </View>
                        <TouchableOpacity style={styles.button} onPress={() => console.log("dkjfkldsf")}>
                            <Text style={styles.buttonTxt}>Save Details</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView >
    )
}

export default ProfileScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#fff'
    },
    profileContainer: {
        marginTop: 5,
        flexGrow: 1,
    },
    image: {
        borderRadius: 75,
        borderColor: "#F3F3F3",
        borderWidth: 2,
        position: 'relative',
    },
    userName: {
        fontSize: 22,
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "700",
        color: "#000",
        textAlign: 'center'
    },
    inputContainer: {
        width: '100%',
        height: 350,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50
    },
    input: {
        backgroundColor: "#E5E7E9",
        borderRadius: 20,
        height: '100%',
        padding: 12,
        fontSize: 18,
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "700",
    },
    buttonTxt: {
        textAlign: "center",
        color: "white",
        fontSize: 22,
        fontFamily: "Poppins",
        fontWeight: "700"
    },
    button: {
        width: "95%",
        height: 50,
        fontFamily: "Poppins",
        borderRadius: 40,
        padding: 6,
        marginTop: 15,
        backgroundColor: "#582C7D"
    },
})
