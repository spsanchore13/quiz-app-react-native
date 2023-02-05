import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import React from "react";

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.bannerContainer}>
        <Image
          source={{
            uri: "https://cdni.iconscout.com/illustration/premium/thumb/giving-different-feedback-and-review-in-websites-2112230-1779230.png",
          }}
          style={styles.banner}
        />
      </View>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.navigate("Quiz")}
      >
        <Text style={styles.buttontext}>Home</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  bannerContainer: {
    justifyContent: 'center',
    alignItems:"center",
    flex:1
  },
  banner: {
    height:300,
    width:300,
  },
  container: {
    paddingTop: 40,
    marginHorizontal: 20,
    height: "100%",
  },
  btn: {
    width: "100%",
    backgroundColor: "#0077b6",
    padding: 12,
    borderRadius: 16,
    alignItems: "center",
  },
  buttontext: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
  },
});

export default Home;
