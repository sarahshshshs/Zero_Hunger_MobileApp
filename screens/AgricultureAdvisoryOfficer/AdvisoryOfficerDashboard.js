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
import { useNavigation } from "@react-navigation/native";

export default function AdvisoryOfficerDashboard() {
  const [data, setData] = useState("");
  const navigation = useNavigation();

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
        Agriculture Advisory Officer Activities
      </Text>
      <Image
        style={{
          width: "90%",
          height: "40%",
          alignItems: "center",
          marginTop: 20,
          marginLeft: 10,
          marginRight: 10,
        }}
        source={require("../../assets/AAO.png")}
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
          onPress={() => navigation.navigate("Add Answer")}
          underlayColor="#0084fffa"
        >
          <Text style={{ fontSize: 20, fontWeight: "bold", color: "#8e0ee3" }}>
            View Farmers' New Question
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
          onPress={() => navigation.navigate("Answer List")}
          underlayColor="#0084fffa"
        >
          <Text style={{ fontSize: 20, fontWeight: "bold", color: "#8e0ee3" }}>
            View Answers
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
          onPress={() => navigation.navigate("Farmer Dashboard")}
          underlayColor="#0084fffa"
        >
          <Text style={{ fontSize: 20, fontWeight: "bold", color: "#8e0ee3" }}>
            Farmer
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
