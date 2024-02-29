import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, SafeAreaView } from 'react-native';
import PhoneInput from "react-native-phone-number-input";
import React, { useState } from 'react';
import GoogleLogin from "../../assets/google-plus.svg";
import FacebookLogin from "../../assets/facebook.svg";

import { useFormik } from 'formik';
import { useNavigation } from '@react-navigation/native';
import { AppNavigationProps } from '../../../App';

const SignupScreen = ({navigation}:AppNavigationProps<'Register'>) => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const formik = useFormik({
        initialValues: {
            phoneNumber: '',
            password: ''
        },
        onSubmit: values => {
            console.log(JSON.stringify(values, null, 2), "hello user here is ur details");
            formik.resetForm();
            navigation.navigate('OTPVerification');
        },
    });

    return (
        <SafeAreaView style={{height:"100%"}}>
            <Image source={require('../../assets/login.jpg')} style={styles.logo} />
            <View style={styles.textContainer}>
                <Text style={styles.mainHeading}>Welcome! to <Text style={styles.secondaryHeading}>Pro Chat</Text></Text>
                <PhoneInput
                    defaultValue={formik.values.phoneNumber}
                    defaultCode="IN"
                    layout="first"
                    onChangeText={formik.handleChange('phoneNumber')}
                    value={formik.values.phoneNumber}
                    withDarkTheme
                    withShadow
                    autoFocus
                    containerStyle={[styles.phoneInputContainer, styles.shadowProp]}
                    textContainerStyle={styles.phoneInputTextContainer}
                />
                <TextInput
                    style={[styles.input, styles.shadowProp, styles.passwordField]}
                    onChangeText={formik.handleChange('password')}
                    value={formik.values.password}
                    placeholder="Enter your password"
                    secureTextEntry={!isPasswordVisible}
                />
                <TouchableOpacity
                    onPress={() => setIsPasswordVisible(!isPasswordVisible)}
                >
                    <Image
                        style={styles.passwordIcon}
                        source={isPasswordVisible
                            ? require('../../assets/hidden.png')
                            : require('../../assets/view.png')
                        }
                    />
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => formik.handleSubmit()}>
                    <Text style={styles.buttonTxt}>Sign Up</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.link} onPress={() => navigation.navigate('Login')}>
                    <Text style={styles.linkText}>Already a member?</Text>
                </TouchableOpacity>
                <View style={styles.orContainer}>
                    <Text style={styles.mainHeading}>Or</Text>
                </View>
                <View style={{ flexDirection: 'row', gap: 35, marginTop: 10, borderWidth: 1, width: '90%', padding: 15, borderRadius: 50, backgroundColor: '#582C7D', alignItems: 'center' }}>
                    <GoogleLogin style={{ transform: [{ scale: 2 }], marginLeft: 50 }} />
                    <Text style={styles.buttonTxt}>Sign up with Google</Text>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "white"
    },
    orContainer: {
        width: 70
    },
    socialFlex: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 80
    },
    socialLogo: {
        width: 54, height: 55
    },
    textContainer: {
        width: "100%",
        height: "85%",
        position: "absolute",
        top: 280,
        bottom: 0,
        backgroundColor: "#fff",
        alignItems: 'center',
        gap: 8,
        borderTopLeftRadius: 60,
        paddingTop: 20
    },
    logo: {
        width: '100%', height: '85%', resizeMode: 'cover'
    },
    mainHeading: {
        fontSize: 28,
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "700",
        color: "#000",
        textAlign: 'center'
    },
    secondaryHeading: {
        fontSize: 30,
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "700",
        color: "#582C7D"
    },
    input: {
        width: "95%",
        height: 70,
        margin: 12,
        fontFamily: "Poppins",
        padding: 20,
        borderRadius: 40,
        backgroundColor: 'white'
    },
    phoneInputContainer: {
        // height:70,
        width: "95%",
        fontFamily: "Poppins",
        borderRadius: 40,
        elevation: 10
    },
    phoneInputTextContainer: {
        width: "95%",
        fontFamily: "Poppins",
        borderRadius: 40,
    },
    shadowProp: {
        elevation: 10
    },
    button: {
        width: "95%",
        height: 60,
        fontFamily: "Poppins",
        borderRadius: 40,
        padding: 10,
        marginTop: 15,
        backgroundColor: "#582C7D"
    },
    socialButton: {
        width: "95%",
        height: 70,
        fontFamily: "Poppins",
        justifyContent: "center",
        gap: 5,
        alignItems: "center",
        flexDirection: "row",
        borderRadius: 40,
        padding: 10,
        marginTop: 15,
        backgroundColor: "#3258FF"
    },
    buttonTxt: {
        textAlign: "center",
        color: "white",
        fontSize: 22,
        fontFamily: "Poppins",
        fontWeight: "700"
    },
    passwordField: {
        position: "relative"
    },
    passwordIcon: {
        position: 'absolute',
        width: 30,
        height: 30,
        top: -70,
        left: 130
    },
    link: {
        alignSelf: 'flex-start',
        marginLeft: 30
    },
    linkText: {
        color: '#000000',
        textDecorationLine: 'underline',
        fontSize: 16
    },
});

export default SignupScreen
