import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    FlatList,
    ToastAndroid,
    Image
  } from "react-native";
  import React, { useState, useEffect } from "react";
  import { useNavigation } from "@react-navigation/native";
  import { db } from "../../firebase-config/firebase-config";
  import { collection, getDocs, doc, deleteDoc } from "firebase/firestore";
  
  export default function RecipeList() {
    const [getData, setGetData] = useState("");
    const navigation = useNavigation();
    const DatCollectinRef = collection(db, "Recipe"); //firebase databse reference
    const [ignored, forceUpdate] = React.useReducer((x) => x + 1, 0); //the method for refresh functions
  
    useEffect(() => {
      //fetch the all data from firebase and set it to usestate, this firebase method
      const getAllData = async () => {
        const data = await getDocs(DatCollectinRef);
        setGetData(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        forceUpdate();
      };
      getAllData();
    }, [ignored]);
  
    //delete users from datasase
    const deleteUser = async (id) => {
      try {
        const UserDoc = doc(db, "Recipe", id);
        await deleteDoc(UserDoc);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
      ToastAndroid.show("successfully Deleted!", ToastAndroid.SHORT);
      forceUpdate();
    };
  
    return (
      <View style={{ flex: 1, top: 20, backgroundColor: '#f3ebf5' }}>
        <Text
          style={{
            color: "#2f0b9c",
            fontWeight: "bold",
            fontSize: 30,
            marginTop: 20,
            textAlign: "center",
            textShadowColor:'#585858',
            textShadowOffset:{width: 5, height: 5},
            textShadowRadius:10,
          }}
        >
          Recipe List
        </Text>
        <Image
            style={{
              width: "20%",
              height: "10%",
              alignItems: "center",
              marginTop: -53,
              marginLeft:20,
             borderRadius:10
            }}
            source={require("../../assets/chef.gif")}
            
          />
        {/* store feched data in list using react native flatlist */}
        <FlatList
          style={{
            margin: 5,
            height: "95%",
            
          }}
          data={getData}
          renderItem={({ item }) => (
            <View
              style={{
                margin: 5,
                backgroundColor:'#e2d3e6' ,
                padding: 10,
                borderRadius: 15,
                elevation: 10,
              }}
            >
              <Text style={styles.text}>Recipe Name : {item.name}</Text>
              <Text style={styles.text}>Ingredient : {item.ingedrients}</Text>
              <Text style={styles.text}>Preparation : {item.steps}</Text>
              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  justifyContent: "flex-end",
                }}
              >
                {/* update button */}
                <TouchableOpacity
                  style={{
                    marginTop: 15,
                    flex: 0.4,
                    backgroundColor: "#f0b841",
                    marginHorizontal: 5,
                    height: 30,
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: 10,
                  }}
                  activeOpacity={2}
                  //pass data to another page using usenavigate params for update user
                  onPress={() => navigation.navigate("Update Recipe", { item })}
                  underlayColor="#0084fffa"
                >
                  <Text style={{ fontSize: 15, color: "#fff" }}>Update</Text>
                </TouchableOpacity>
                {/* delete button */}
                <TouchableOpacity
                  style={{
                    marginTop: 15,
                    flex: 0.4,
                    backgroundColor: "tomato",
                    marginHorizontal: 5,
                    height: 30,
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: 10,
                  }}
                  activeOpacity={2}
                  onPress={() => deleteUser(item.id)}
                  underlayColor="#0084fffa"
                >
                  <Text style={{ fontSize: 15, color: "#fff" }}>Delete</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        ></FlatList>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    text: {
      color: "#0D0140",
      marginVertical: 5,
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
  