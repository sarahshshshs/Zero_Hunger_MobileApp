import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ToastAndroid,
  Image,
} from "react-native";
import React, { useState } from "react";
import { db } from "../firebase-config/firebase-config";
import { useNavigation } from "@react-navigation/native";
import { collection, addDoc } from "firebase/firestore";

export default function Dashboard() {
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
        Admin Dashboard
      </Text>

      <View style={{ marginHorizontal: 15 }}>
        {/* Button */}
        <TouchableOpacity
          style={{
            marginTop: 35,
            backgroundColor: "#fff",
            height: 60,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 7,
            borderWidth: 2,
            borderColor: "#8e0ee3",
          }}
          onPress={() => navigation.navigate("Recipe Dashboard")}
          underlayColor="#0084fffa"
        >
          <Text style={{ fontSize: 20, fontWeight: "bold", color: "#8e0ee3" }}>
            Recipe Management
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{ marginHorizontal: 15 }}>
        {/* Button */}
        <TouchableOpacity
          style={{
            marginTop: 35,
            backgroundColor: "#fff",
            height: 60,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 7,
            borderWidth: 2,
            borderColor: "#8e0ee3",
          }}
          onPress={() => navigation.navigate("Add Organic")}
          underlayColor="#0084fffa"
        >
          <Text style={{ fontSize: 20, fontWeight: "bold", color: "#8e0ee3" }}>
            Agriculture Engineer
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{ marginHorizontal: 15 }}>
        {/* Button */}
        <TouchableOpacity
          style={{
            marginTop: 35,
            backgroundColor: "#fff",
            height: 60,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 7,
            borderWidth: 2,
            borderColor: "#8e0ee3",
          }}
          onPress={() => navigation.navigate("Advisory Officer Dashboard")}
          underlayColor="#0084fffa"
        >
          <Text style={{ fontSize: 20, fontWeight: "bold", color: "#8e0ee3" }}>
            Advisory Officer Dashboard
          </Text>
        </TouchableOpacity>
      </View>
      
      <Image
        style={{
          width: "50%",
          height: "31%",
          alignItems: "center",
          justifyContent: "center",
          marginTop: 20,
          marginLeft: 85,
          marginRight: 10,
        }}
        source={require("../assets/logo.png")}
      />
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
