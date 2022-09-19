import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import { Text , ImageBackground , View , StyleSheet , TextInput , TouchableOpacity } from "react-native";
import { screen_names } from '../constants/ScreenNames';
import { ParamListBase } from '@react-navigation/native';
const image = require("../assets/img/Sign_Up_Banner.png")

export default function SignUpScreen() : JSX.Element {
    return (
        <View style={styles.container1}>
        <View style={styles.container1}>
        <ImageBackground source={image} resizeMode="cover" style={styles.image}>
          <Text style={styles.text}>Inside</Text>
        </ImageBackground>
      </View>
      <View style={styles.container2}>
        <TextInput placeholder='Username' style={styles.input}/>
        <TextInput placeholder='Email address' style={styles.input}/>
        <TextInput placeholder='Password' style={styles.input}/>
        <TextInput placeholder='Confirm Password' style={styles.input}/>
        <TouchableOpacity style={[styles.input,styles.button]}>
            <Text style={styles.text2}>
                SIGN ME UP
            </Text>
        </TouchableOpacity>
      </View>
      </View>
    )
}

const styles = StyleSheet.create({
    container1: {
      flex: 1,
    },
    image: {
      justifyContent: "center",
      flex:1,
    },
    text: {
      color: "white",
      fontSize: 42,
      lineHeight: 84,
      fontWeight: "bold",
      textAlign: "center",
    },
    container2 : {
        flex : 3,
        alignItems : "center",
    },
    input: {
        height: 40,
        marginTop : 10,
        width : "80%",
        borderWidth: 1,
        padding: 10,
        borderRadius:5,
      },
      button: {
        backgroundColor : "#000CEB"
      },
      text2: {
        textAlign : "center",
        color : "white"
      }
  });