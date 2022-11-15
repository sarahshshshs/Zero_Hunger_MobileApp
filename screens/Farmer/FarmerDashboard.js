import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ToastAndroid,
} from "react-native";
import React, { useState } from "react";
import { db } from "../../firebase-config/firebase-config";
import { useNavigation } from "@react-navigation/native";
import { collection, addDoc } from "firebase/firestore";

export default function FarmerDashboard() {
  const [data, setData] = useState("");
  const navigation = useNavigation();
  
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
        Answer Management
      </Text>

      <View style={{ marginHorizontal: 15 }}>
        {/* Button */}
        <TouchableOpacity
          style={{
            marginTop: 15,
            backgroundColor: "#0D47A1",
            height: 40,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 7,
          }}
          onPress={() => navigation.navigate("Add Question")}
          underlayColor="#0084fffa"
        >
          <Text style={{ fontSize: 20, fontWeight: "bold", color: "#fff" }}>
            Add Question
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{ marginHorizontal: 15 }}>
        {/* Button */}
        <TouchableOpacity
          style={{
            marginTop: 15,
            backgroundColor: "#0D47A1",
            height: 40,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 7,
          }}
          onPress={() => navigation.navigate("Add Question")}
          underlayColor="#0084fffa"
        >
          <Text style={{ fontSize: 20, fontWeight: "bold", color: "#fff" }}>
            View Answer
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
