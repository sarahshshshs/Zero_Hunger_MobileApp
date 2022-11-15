import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ToastAndroid,
  Image,
} from "react-native";
import React, { useState } from "react";
import { db } from "../../firebase-config/firebase-config";
import { useNavigation } from "@react-navigation/native";
import { collection, addDoc } from "firebase/firestore";

export default function RecipeDashboard() {
  const [data, setData] = useState("");
  const navigation = useNavigation();
  //const DatCollectinRef = collection(db, "Recipe"); //database collection reference

  //inputs handle function
  // const handleChangeText = (name, value) => {
  //   setData((prevState) => ({ ...prevState, [name]: value }));
  // };

  // //create user function,include firebase methods
  // const add_data = async () => {
  //   try {
  //     await addDoc(DatCollectinRef, {
  //       name: data.name,
  //       ingedrients: data.ingedrients,
  //       steps: data.steps
  //     });
  //     if (addDoc) {
  //       ToastAndroid.show("successfully submited!", ToastAndroid.SHORT); //application toast message
  //     }
  //   } catch (e) {
  //     //error handling
  //     console.error("Error adding document: ", e);
  //     const errorCode = error.code;
  //     const errorMessage = error.message;
  //     alert(errorCode, errorMessage);
  //   }
  // };

  return (
    <View style={{ flex: 1, top: 20,  backgroundColor: '#f3ebf5' }}>
      <Text
        style={{
          color: "#2f0b9c",
          fontWeight: "bold",
          fontSize: 30,
          marginTop: 30,
          textAlign: "center",
          textShadowColor:'#585858',
          textShadowOffset:{width: 5, height: 5},
          textShadowRadius:10,
        }}
      >
        Hi Shanika Welcome to Recipe Management!
      </Text>
      <Image
            style={{
              width: "100%",
              height: "40%",
              alignItems: "center",
              marginTop: 20,
              marginLeft:10
             
            }}
            source={require("../../assets/food.gif")}
          />

      <View style={{ marginHorizontal: 15 }}>
        {/* Button */}
        <TouchableOpacity
          style={{
            marginTop: 45,
            backgroundColor: "#fff",
            height: 50,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 7,
            borderWidth: 2,
            borderColor: "#8e0ee3",
          }}
          onPress={() => navigation.navigate("Add Recipe")}
          underlayColor="#0084fffa"
        >
          <Text style={{ fontSize: 20, fontWeight: "bold", color: "#8e0ee3" }}>
            Add Recipe 
          </Text>
          
          
        </TouchableOpacity>
      </View>
      <View style={{ marginHorizontal: 15 }}>
        {/* Button */}
        <TouchableOpacity
          style={{
            marginTop: 35,
            backgroundColor: "#fff",
            height: 50,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 7,
            borderWidth: 2,
            borderColor: "#8e0ee3",
          }}
          onPress={() => navigation.navigate("Recipe List")}
          underlayColor="#0084fffa"
        >
          <Text style={{ fontSize: 20, fontWeight: "bold", color: "#8e0ee3" }}>
            View List 🛒
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
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOpacity: 0.8,
    elevation: 6,
    shadowRadius: 15,
    shadowOffset: { width: 1, height: 13 },
  },
});
