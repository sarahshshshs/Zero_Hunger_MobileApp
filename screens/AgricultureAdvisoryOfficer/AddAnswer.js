import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  ToastAndroid,
  Image,
} from "react-native";
import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { db } from "../../firebase-config/firebase-config";
import { collection, getDocs } from "firebase/firestore";

export default function AddAnswer() {
  const [getData, setGetData] = useState("");
  const navigation = useNavigation();
  const DatCollectinRef = collection(db, "Answer"); //firebase databse reference
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



  return (
    <View style={{ flex: 1, top: 20, backgroundColor: "#f3ebf5" }}>
      <Text
        style={{
          color: "#2f0b9c",
          fontWeight: "bold",
          fontSize: 30,
          marginTop: 20,
          textAlign: "center",
          textShadowColor: "#585858",
          textShadowOffset: { width: 5, height: 5 },
          textShadowRadius: 10,
        }}
      >
        &nbsp;&nbsp;&nbsp;New Question
      </Text>
      <Image
        style={{
          width: "20%",
          height: "10%",
          alignItems: "center",
          marginTop: -53,
          marginLeft: 20,
          borderRadius: 10,
        }}
        source={require("../../assets/1720482.png")}
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
              backgroundColor: "#e2d3e6",
              padding: 10,
              borderRadius: 15,
              elevation: 10,
            }}
          >
            <Text style={styles.text}>
              <b>{item.question}</b>
            </Text>
            {/* <Text style={styles.text}>Answer : {item.answer}</Text> */}
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "flex-end",
              }}
            >
              {/* add button */}
              <TouchableOpacity
                style={{
                  marginTop: 15,
                  flex: 0.4,
                  backgroundColor: "#0084fffa",
                  marginHorizontal: 5,
                  height: 30,
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 10,
                }}
                activeOpacity={2}
                //pass data to another page using usenavigate params for add answer
                onPress={() => navigation.navigate("Submit Answer", { item })}
                underlayColor="#0084fffa"
              >
                <Text style={{ fontSize: 15, color: "#fff" }}>Add Answer</Text>
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
