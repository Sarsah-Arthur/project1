import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";

export function Orderconfirm({navigation}) {
    return(
        <View style={styles.container}>
            <Text style={styles.text}>ππ£πππ£ πΈππππ‘π₯ππ!π</Text>
        </View>
    );
}

const styles = StyleSheet.create({
container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
},
text: {
    textAlign: "center",
    fontSize: 20,
}

});