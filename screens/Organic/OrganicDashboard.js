import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    ToastAndroid,
    Image
  } from "react-native";
  import React, { useState } from "react";
  import { db } from "../../firebase-config/firebase-config";
  import { useNavigation } from "@react-navigation/native";
  import { collection, addDoc } from "firebase/firestore";
  
  export default function OrganicDashboard() {
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
      <View style={{ flex: 1, top: 20 }}>
        <Text
          style={{
            color: "#0D0140",
            fontWeight: "bold",
            fontSize: 30,
            marginTop: 10,
            textAlign: "center",
          }}
        >
        Organic Management
        </Text>

        <View style={{ marginHorizontal: 15 }}>
          {/* Button */}
          <TouchableOpacity
            style={{
              marginTop: 15,
              backgroundColor: "#4d3f7a",
              height: 40,
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 7,
            }}
            onPress={() => navigation.navigate("Add News")}
            underlayColor="#0084fffa"
          >
            <Text style={{ fontSize: 20, fontWeight: "bold", color: "#fff", marginTop:"30" }}>
              Add Organic News
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ marginHorizontal: 15 }}>
          {/* Button */}
          <TouchableOpacity
            style={{
              marginTop: 15,
              backgroundColor: "#4d3f7a",
              height: 40,
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 7,
            }}
            onPress={() => navigation.navigate("News List")}
            underlayColor="#0084fffa"
          >
            <Text style={{ fontSize: 20, fontWeight: "bold", color: "#fff" }}>
              View News List 🛒
            </Text>
          </TouchableOpacity>
 
          
        </View>
           <Image
            style={{
              width: "93%",
              height: "40%",
              alignItems: "center",
              marginTop: 40,
              marginLeft:10
            }}
            source={require("../../assets/organicc.png")}
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
  