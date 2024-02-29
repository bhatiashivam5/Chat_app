import { FlatList, Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react';
import BellIcon from "../../assets/notification-bell.svg";
import SearchIcon from "../../assets/search.svg";
import { userListOptions } from '../../constants/options';
import { useNavigation } from '@react-navigation/native';
import { AppNavigationProps } from '../../../App';
import CustomDropdown from '../../components/menubar/menubar';

const UsersScreen = ({ navigation }: AppNavigationProps<'Users'>) => {
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [isHovered, setIsHovered] = useState<boolean>(false);
    const options = ['Logout'];
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionSelect = (option: string) => {
        navigation.navigate('Login')
        setIsOpen(false);
    };
    const handleSearchQuery = (text: string) => {
        setSearchQuery(text)
    }

    const renderItem = ({ item }: { item: { id: string, img: any, userName: string, seenTime: string, lastMessage: string } }) => (
        <TouchableOpacity
            onPress={() => navigation.navigate('Chat')}
            style={[styles.container, isHovered && styles.hovered, styles.userMainContainer]}
            key={item.id}
        >
            <Image source={item?.img} style={{ width: 50, height: 50 }} />
            <View style={{ flexDirection: 'column' }}>
                <View style={styles.userNameContainer}>
                    <Text style={styles.userName}>{item?.userName}</Text>
                    <Text style={styles.activeTime}>{item?.seenTime}</Text>
                </View>
                <Text style={styles.message}>{item?.lastMessage}</Text>
            </View>
        </TouchableOpacity>
    );


    return (
        <SafeAreaView style={{ flex: 1, width: '100%',backgroundColor:'#fff', flexDirection:'column',gap:10 }}>
            <View style={styles.mainBar}>
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                    <Text style={styles.messageHead}>Messages</Text>
                    <View style={styles.countContainer}><Text style={styles.countText}>12</Text></View>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                    <BellIcon height="40" width="40" />
                    <CustomDropdown options={options} isOpen={isOpen} onToggle={toggleDropdown} onSelect={handleOptionSelect} />
                </View>
            </View>
            <View
                style={{
                    borderBottomColor: 'gray',
                    borderBottomWidth: StyleSheet.hairlineWidth,
                }}
            />
            <View style={styles.searchField}>
                <TextInput
                    style={styles.input}
                    onChangeText={handleSearchQuery}
                    value={searchQuery}
                    placeholder="Search messages..."
                    keyboardType="default"
                />
                <SearchIcon style={{ transform: [{ scale: 1 }], position: "absolute", top: 15, left: 350 }} />
            </View>
            <FlatList
                data={userListOptions}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />

        </SafeAreaView>
    )
}

export default UsersScreen

const styles = StyleSheet.create({
    container: {
        padding: 10,
        borderRadius: 5,
    },
    hovered: {
        backgroundColor: 'blue',
    },
    userMainContainer: {
        height: 100,
        padding: 5,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 25,
        marginTop: 2
    },
    userNameContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '90%'
    },
    mainBar: {
        width: '100%',
        flexDirection: 'row',
        padding: 5,
        //justifyContent: 'space-between',
        gap:120,
        height: 'auto'
    },
    messageHead: {
        fontSize: 28,
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "700",
        color: "#000",
        textAlign: 'center'
    },
    countContainer: {
        backgroundColor: "#F0F3F4",
        width: 50,
        padding: 5,
        borderRadius: 15,
        height: 'auto'
    },
    countText: {
        fontSize: 18,
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "700",
        color: "#000",
        textAlign: 'center'
    },
    input: {
        height: 50,
        margin: 4,
        borderWidth: 1,
        width: '80%',
        padding: 10,
        borderRadius: 50,
        borderColor: "transparent",
        position: "relative",
        backgroundColor: "#F0F3F4",
    },
    searchField: {
        flexDirection: "row",
        width: "100%",
        borderRadius: 50,
        borderColor: "transparent",
        position: "relative",
        backgroundColor: "#F0F3F4",
        borderWidth:1,
        zIndex:1
    },
    userName: {
        fontSize: 18,
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "700",
        color: "#000",
        textAlign: 'center'
    },
    activeTime: {
        fontSize: 18,
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "600",
        color: "#797D7F",
        textAlign: 'center'
    },
    message: {
        fontSize: 16,
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "600",
        color: "#00000066"
    }
})
