import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Colors } from '../../constants/Colors'
import { StatusBar } from 'expo-status-bar'
import OTPBackground from '../../assets/otp.svg';
import { OtpInput } from "react-native-otp-entry";
import { AppNavigationProps } from '../../../App';

const OTPVerification = ({navigation}:AppNavigationProps<'OTPVerification'>) => {
    return (
        <SafeAreaView style={{ backgroundColor: '#fff', height: '100%' }}>
            <View style={{ backgroundColor: '#fff', alignItems: 'center' }}>
                <OTPBackground style={{ width: 400, height: 400, }} />
                <View style={{ width: '100%', marginBottom: 20, backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={styles.h1}>Enter Verification Code</Text>
                    <Text style={styles.h2}>We are automatically detecting SMS</Text>
                    <Text style={styles.h2}>send to your phone number</Text>
                    <View style={{ width: '100%' }}>
                        <OtpInput
                            numberOfDigits={6}
                            onTextChange={(text) => console.log(text)}
                            theme={{
                                containerStyle: styles.container,
                                inputsContainerStyle: styles.inputsContainer,
                                pinCodeContainerStyle: styles.pinCodeContainer,
                                // pinCodeTextStyle: styles.pinCodeText,
                                focusStickStyle: styles.focusStick,
                                focusedPinCodeContainerStyle: styles.activePinCodeContainer
                            }}
                        />
                    </View>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'flex-start',
                        marginLeft:-110
                    }}>
                        <Text style={styles.h2}>Don't receive the code ?</Text>
                        <TouchableOpacity>
                            <Text style={styles.h2}>{" "} Resend Code</Text></TouchableOpacity>
                    </View>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Main')}>
                        <Text style={styles.buttonTxt}>Verify Otp</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default OTPVerification

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff'
    },
    inputsContainer: {
        marginTop: 20,
        height: 80,
        padding: 10,
        width: '100%'
    },
    pinCodeContainer: {
        borderColor: '#0000001A',
        width: 50
    },
    activePinCodeContainer: {
        borderColor: '#582C7D'
    },
    focusStick: {
        borderColor: '#582C7D'
    },
    h1: {
        fontSize: 16,
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "700",
        color: "#000",
        textAlign: 'center'
    },
    h2: {
        fontSize: 14,
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "600",
        color: "#000",
        textAlign: 'center',
        alignItems:'center'
    },
    button: {
        width: "90%",
        height: 60,
        fontFamily: "Poppins",
        borderRadius: 40,
        padding: 10,
        marginTop: 45,
        backgroundColor: "#582C7D",
        alignItems: 'center',

    },
    buttonTxt: {
        textAlign: "center",
        color: "white",
        fontSize: 22,
        fontFamily: "Poppins",
        fontWeight: "700"
    }
})
