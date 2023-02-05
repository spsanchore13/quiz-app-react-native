import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";

const Result = ({ navigation, route }) => {
  // console.warn(route)
  const { score } = route.params;

  const resultBanner =
    score > 10
      ? "https://cdni.iconscout.com/illustration/premium/thumb/men-celebrating-victory-4587301-3856211.png"
      : "https://cdni.iconscout.com/illustration/free/thumb/concept-about-business-failure-1862195-1580189.png";

  return (
    <View style={styles.container}>
      <Text style={styles.scoreValue}>Score {score}</Text>
      <View style={styles.bannerContainer}>
        <Image
          style={styles.banner}
          source={{
            uri: resultBanner,
          }}
        />
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate("Home")}
        style={styles.button}
      >
        <Text style={styles.buttonText}>GO TO HOME</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    marginHorizontal: 20,
    height: "100%",
  },
  bannerContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  banner: {
    height: 300,
    width: 300,
  },
  button: {
    width: '100%',
    backgroundColor: '#1A759F',
    padding: 12,
    borderRadius: 16,
    alignItems: 'center',
    marginBottom: 30,
  },
  buttonText: {
    fontSize: 24,
    fontWeight: '600',
    color: 'white',
  },
  scoreValue:{
    fontSize: 24,
    fontWeight:'800',
    alignSelf:'center',
    marginTop:50,
  }
});

export default Result;
