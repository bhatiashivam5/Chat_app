import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View, Dimensions } from 'react-native'
import React from 'react';
import ChatUser from '../../assets/chatscreen/Frame 1.svg';
import VideoIcon from "../../assets/chatscreen/Icon Filled.svg";
import UploadIconSvg from "../../assets/chatscreen/uploadIcon.svg";
import UploadIcon from "../../assets/chatscreen/uploadMobile.svg";
import SendIcon from '../../assets/chatscreen/SendIcon.svg'

const ChatScreen = () => {

  return (
    <SafeAreaView style={[styles.container]}>
      {/* <ScrollView contentContainerStyle={{ flexGrow: 1 }}> */}
      <View>
        <View style={styles.header}>
          <View style={styles.userDetails}>
            <ChatUser style={styles.userAvatar} />
            <View>
              <Text style={styles.username}>Florencio Dorrance</Text>
              <View style={styles.onlineStatusContainer}>
                <View style={styles.onlineStatusDot} />
                <Text style={styles.onlineStatusText}>Online</Text>
              </View>
            </View>
          </View>
          <View style={styles.iconContainer}>
            <TouchableOpacity style={styles.iconButton}>
              <UploadIcon style={styles.icon} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton}>
              <VideoIcon style={styles.icon} />
            </TouchableOpacity>
          </View>
        </View>
        {/* <View style={styles.chatContainer}> */}
        <ScrollView style={styles.chatContainer}>
          <View style={styles.messageContainer}>
            <ChatUser style={styles.userAvatar} />
            <View style={styles.messageContent}>
              <Text style={styles.userMsg}>Hello</Text>
              <Text style={styles.userMsg}>Buddy</Text>
              <Text style={styles.userMsg}>Florencio Dorrance</Text>
            </View>
          </View>
          {/* Other messages */}
          <View style={styles.messageContainerSender}>
            <View style={styles.messageContentSender}>
              <Text style={styles.userMsgSender}>Hello</Text>
            </View>
            <ChatUser style={styles.userAvatar} />
          </View>
          <View style={styles.messageContainer}>
            <ChatUser style={styles.userAvatar} />
            <View style={styles.messageContent}>
              <Text style={styles.userMsg}>Hello</Text>
              <Text style={styles.userMsg}>Buddy</Text>
              <Text style={styles.userMsg}>Florencio Dorrance</Text>
            </View>
          </View>
          <View style={styles.messageContainerSender}>
            <View style={styles.messageContentSender}>
              <Text style={styles.userMsgSender}>Hello</Text>
              <Text style={styles.userMsgSender}>Buddy</Text>
              <Text style={styles.userMsgSender}>Florencio Dorrance</Text>
            </View>
            <ChatUser style={styles.userAvatar} />
          </View>
          <View style={styles.messageContainer}>
            <ChatUser style={styles.userAvatar} />
            <View style={styles.messageContent}>
              <Text style={styles.userMsg}>Hello</Text>
              <Text style={styles.userMsg}>Buddy</Text>
              <Text style={styles.userMsg}>Florencio Dorrance</Text>
            </View>
          </View>
          <View style={styles.messageContainerSender}>
            <View style={styles.messageContentSender}>
              <Text style={styles.userMsgSender}>Hello</Text>
              <Text style={styles.userMsgSender}>Buddy</Text>
              <Text style={styles.userMsgSender}>Florencio Dorrance</Text>
            </View>
            <ChatUser style={styles.userAvatar} />
          </View>
          <View style={styles.messageContainer}>
            <ChatUser style={styles.userAvatar} />
            <View style={styles.messageContent}>
              <Text style={styles.userMsg}>Hello</Text>
              <Text style={styles.userMsg}>Buddy</Text>
              <Text style={styles.userMsg}>Florencio Dorrance</Text>
            </View>
          </View>
        </ScrollView>
        {/* </View> */}
        <View style={styles.inputContainer}>
          <UploadIconSvg style={styles.uploadIcon} />
          <TextInput
            placeholder='Type a message'
            style={styles.input}
          />
          <TouchableOpacity style={styles.sendButton}>
            <SendIcon style={styles.sendIcon} />
          </TouchableOpacity>
        </View>
      </View>
      {/* </ScrollView> */}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 0,
    backgroundColor: '#fff',
    height: '100%'
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderWidth: 1,
    borderColor: 'lightgray',
    gap: 10,
    height: 60,
    justifyContent: 'space-between',
  },
  userDetails: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    gap: 10,
    height: 60,
  },
  userAvatar: {
    width: 60,
    height: 60,
  },
  username: {
    fontSize: 18,
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "700",
    color: "#000000",
    textAlign: 'center'
  },
  onlineStatusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  onlineStatusDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#68D391',
  },
  onlineStatusText: {
    fontSize: 14,
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "600",
    color: "#000000",
    textAlign: 'center'
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
  },
  iconButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F3EBFA',
    padding: 5,
    borderRadius: 15,
  },
  icon: {
    width: 30,
    height: 30,
  },
  chatContainer: {
    padding: 10,
    height: '82%',
  },
  messageContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    gap: 10
  },
  messageContainerSender: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    gap: 10
  },
  messageContent: {
    alignItems: 'flex-start',
  },
  messageContentSender: {
    alignItems: 'flex-end',
  },
  userMsg: {
    fontSize: 14,
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "600",
    color: "#000000",
    textAlign: 'center',
    backgroundColor: 'lightgray',
    padding: 10,
    marginTop: 5,
    borderRadius: 12
  },
  userMsgSender: {
    fontSize: 14,
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "600",
    color: "#FFFFFF",
    textAlign: 'center',
    backgroundColor: '#582C7D',
    padding: 10,
    marginTop: 5,
    borderRadius: 12
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  uploadIcon: {
    width: 20,
    height: 20,
  },
  input: {
    flex: 1,
    marginLeft: 10,
    borderWidth: 2,
    borderColor: '#E2E8F0',
    borderRadius: 12,
    padding: 7,
    width: '100%',
  },
  sendButton: {
    position: 'absolute',
    right: 25,
  },
  sendIcon: {
    width: 20,
    height: 20,
  },
});

export default ChatScreen;
