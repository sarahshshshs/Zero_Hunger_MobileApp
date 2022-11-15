import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    ToastAndroid,
    Image
  } from "react-native";
  import React, { useState, useEffect } from "react";
  import { db } from "../../firebase-config/firebase-config";
  import { useNavigation } from "@react-navigation/native";
  import {
    collection,
    getDocs,
    updateDoc,
    getDoc,
    deleteDoc,
    doc,
  } from "firebase/firestore";
  
  export default function UpdateRecipe({ route }) {
    const { item } = route.params;
    const id = item.id;
    const [data, setData] = useState("");
    const navigation = useNavigation();
    const initialState = {
      name: "",
      ingedrients: "",
      steps:""
    };
  
    useEffect(() => {
      const updatemember = async () => {
        try {
          const docRef = await getDoc(doc(db, "Recipe", id));
          // console.log("Document update data:", docRef.data());
          setData({ ...docRef.data(), id: docRef.id });
        } catch (e) {
          console.error("Error adding document: ", e);
        }
      };
  
      updatemember();
    }, []);
  
    const handleChangeText = (name, value) => {
      setData((prevState) => ({ ...prevState, [name]: value }));
    };
  
    const UpdateRecipe = async () => {
      try {
        await updateDoc(doc(db, "Recipe", id), {
          name: data.name,
          ingedrients: data.ingedrients,
          steps: data.steps
        });
        if (updateDoc) {
          ToastAndroid.show("Updated successfully!", ToastAndroid.SHORT);
          navigation.navigate("Recipe List");
        }
      } catch (e) {
        console.error("Error adding document: ", e);
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorCode, errorMessage);
      }
    };
  
    return (
      <View style={{ flex: 1, top: 20, backgroundColor: '#f3ebf5' }}>
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
          Update Recipe
        </Text>
        
        <Image
            style={{
              width: "15%",
              height: "10%",
              alignItems: "center",
              marginTop: -53,
              marginLeft:15,
             marginBottom:30
            }}
            source={require("../../assets/dash.png")}
            
          />
        <View
          style={{
            margin: 5,
            borderBottomWidth: 1,
            borderColor: "#BDBDBD",
            padding: 10,
          }}
        >
          <Text style={styles.text}>Recipe Name</Text>
          <TextInput
            style={{
              borderColor: "#fff",
              borderWidth: 2,
              borderRadius: 10,
              padding: 5,
              paddingLeft: 10,
            }}
            keyboardType="string"
            placeholder="enter Recipe Name"
            value={data.name}
            onChangeText={(val) => handleChangeText("name", val)}
          ></TextInput>
  
          <Text style={styles.text}>Ingedrients</Text>
          <TextInput
            style={{
              borderColor: "#fff",
              borderWidth: 2,
              borderRadius: 10,
              padding: 5,
              paddingLeft: 10,
            }}
            placeholder="enter ingedrients"
            value={data.ingedrients}
            onChangeText={(val) => handleChangeText("ingedrients", val)}
          ></TextInput>
          <Text style={styles.text}>Preparation</Text>
          <TextInput
            style={{
              borderColor: "#fff",
              borderWidth: 2,
              borderRadius: 10,
              padding: 5,
              paddingLeft: 10,
              height: 80,
            }}
            placeholder="enter steps"
            value={data.steps}
            onChangeText={(val) => handleChangeText("steps", val)}
          ></TextInput>
          <TouchableOpacity
            style={styles.button}
            activeOpacity={2}
            onPress={() => UpdateRecipe()}
            underlayColor="#0084fffa"
          >
            <Text style={{ fontSize: 20, fontWeight: "bold", color: "black" }}>
              Update
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
      backgroundColor: "#f0b841",
      height: 40,
      width:100,
      marginLeft:120,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 7,
      marginBottom:50
    },
  });
  