import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ToastAndroid,
  Image,
} from "react-native";
import React, { useState } from "react";
import { db } from "../../firebase-config/firebase-config";
import { useNavigation } from "@react-navigation/native";
import { collection, addDoc } from "firebase/firestore";

export default function AddRecipePage() {
  const [data, setData] = useState("");
  const navigation = useNavigation();
  const DatCollectinRef = collection(db, "Recipe"); //database collection reference

  //inputs handle function
  const handleChangeText = (name, value) => {
    setData((prevState) => ({ ...prevState, [name]: value }));
  };

  //create user function,include firebase methods
  const add_data = async () => {
    try {
      await addDoc(DatCollectinRef, {
        name: data.name,
        ingedrients: data.ingedrients,
        steps: data.steps,
      });
      if (addDoc) {
        ToastAndroid.show("successfully submited!", ToastAndroid.SHORT); //application toast message
        navigation.navigate("Recipe List");
      }
    } catch (e) {
      //error handling
      console.error("Error adding document: ", e);
      ToastAndroid.show("please filled out all feilds!", ToastAndroid.SHORT);
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorCode, errorMessage);
    }
  };

  return (
    <View style={{ flex: 1, top: 20, backgroundColor: "#f3ebf5" }}>
      <Text
        style={{
          color: "#2f0b9c",
          fontWeight: "bold",
          fontSize: 30,
          marginTop: 30,
          textAlign: "center",
          textShadowColor: "#585858",
          textShadowOffset: { width: 5, height: 5 },
          textShadowRadius: 10,
        }}
      >
        Add Recipe
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
        <Image
          style={{
            width: "20%",
            height: "20%",
            alignItems: "center",
            marginTop: -53,
            marginLeft: 15,
            marginBottom: 30,
          }}
          source={require("../../assets/dash.png")}
        />
        {/* lables */}

        <Text style={styles.text}>Recipe Name</Text>
        {/* input fields  */}
        <TextInput
          style={{
            borderColor: "#fff",
            borderWidth: 2,
            borderRadius: 1,
            padding: 5,
            paddingLeft: 10,
          }}
          keyboardType="string"
          placeholder="Enter Recipe Name"
          onChangeText={(val) => handleChangeText("name", val)}
        ></TextInput>
        {/* lables */}
        <Text style={styles.text}>Ingredient</Text>
        {/* input fields  */}
        <TextInput
          style={{
            borderColor: "#fff",
            borderWidth: 2,
            borderRadius: 1,
            padding: 5,
            paddingLeft: 10,
          }}
          placeholder="Enter Ingredients"
          onChangeText={(val) => handleChangeText("ingedrients", val)}
        ></TextInput>
        <Text style={styles.text}>Preparation</Text>
        {/* input fields  */}
        <TextInput
          style={{
            borderColor: "#fff",
            borderWidth: 2,
            borderRadius: 1,
            padding: 5,
            paddingLeft: 10,
            height: 80,
          }}
          placeholder="Enter Preparation methods"
          onChangeText={(val) => handleChangeText("steps", val)}
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
    backgroundColor: "#2f0b9c",
    height: 40,
    width: 100,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 7,
    marginLeft: 120,
    marginTop: 30,
    marginBottom: 50,
  },
});
