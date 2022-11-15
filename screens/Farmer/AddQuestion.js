import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ToastAndroid,
} from "react-native";
import React, { useState } from "react";
import { db } from "../../firebase-config/firebase-config";
import { useNavigation } from "@react-navigation/native";
import { collection, addDoc } from "firebase/firestore";

export default function AddQuestion() {
  const [data, setData] = useState("");
  const navigation = useNavigation();
  const DatCollectinRef = collection(db, "Answer"); //database collection reference

  //inputs handle function
  const handleChangeText = (name, value) => {
    setData((prevState) => ({ ...prevState, [name]: value }));
  };

  //create user function,include firebase methods
  const add_data = async () => {
    try {
      await addDoc(DatCollectinRef, {
        name: data.name,
        connumber: data.connumber,
        question: data.question,
        answer: "",
      });
      if (addDoc) {
        ToastAndroid.show("successfully submited!", ToastAndroid.SHORT); //application toast message
      }
    } catch (e) {
      //error handling
      console.error("Error adding document: ", e);
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorCode, errorMessage);
    }
  };

  return (
    <View style={{ flex: 1, top: 20 }}>
      <Text
        style={{
          color: "#0D0140",
          fontWeight: "bold",
          fontSize: 30,
          marginTop: 30,
          textAlign: "center",
        }}
      >
        Add Name
      </Text>

      {/* user data entering form start form here */}
      <View
        style={{
          margin: 5,
          borderBottomWidth: 1,
          borderColor: "#BDBDBD",
          padding: 10,
        }}
      >
        {/* lables */}
        <Text style={styles.text}>Name</Text>
        {/* input fields  */}
        <TextInput
          style={{
            borderColor: "#67afff",
            borderWidth: 1.5,
            borderRadius: 10,
            padding: 5,
            paddingLeft: 10,
          }}
          placeholder="Enter Name"
          onChangeText={(val) => handleChangeText("name", val)}
        ></TextInput>

        {/* lables */}
        <Text style={styles.text}>Contact Number</Text>
        {/* input fields  */}
        <TextInput
          style={{
            borderColor: "#67afff",
            borderWidth: 1.5,
            borderRadius: 10,
            padding: 5,
            paddingLeft: 10,
          }}
          keyboardType="string"
          placeholder="Enter Contact Number"
          onChangeText={(val) => handleChangeText("connumber", val)}
        ></TextInput>

        {/* lables */}
        <Text style={styles.text}>Question</Text>
        {/* input fields  */}
        <TextInput
          style={{
            borderColor: "#67afff",
            borderWidth: 1.5,
            borderRadius: 10,
            padding: 5,
            paddingLeft: 10,
            height: 80,
          }}
          keyboardType="string"
          placeholder="Enter Question"
          onChangeText={(val) => handleChangeText("question", val)}
        ></TextInput>

        {/* submit button */}
        <TouchableOpacity
          style={styles.button}
          activeOpacity={2}
          onPress={() => add_data()}
          underlayColor="#0084fffa"
        >
          <Text style={{ fontSize: 20, fontWeight: "bold", color: "#fff" }}>
            Submit
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    color: "#0D0140",
    marginVertical: 5,
    fontWeight: "bold",
    fontSize: 15,
  },
  button: {
    marginTop: 15,
    backgroundColor: "#448AFF",
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 7,
  },
});
