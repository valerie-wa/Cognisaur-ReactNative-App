import { useRouter } from "expo-router";
import { useEffect, useRef } from "react";
import { Animated, Easing, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Cognisaur from '../assets/images/cognisaur.png';

export default function HomeScreen() {
  const router = useRouter(); //gives navigation access
  const animatedValue = useRef(new Animated.Value(0)).current;

  //run the animation when the screen loads
  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: 1, // Target value
      duration: 500, // Duration in ms
      easing: Easing.linear, // Optional easing
      useNativeDriver: true, // Better performance
    }).start();
  }, [animatedValue]);

  const scale = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0.0, 1],
  });

  return (
    <View style={styles.container}>
      <Animated.Image
        source = {Cognisaur} 
        style={[styles.image, { transform: [{ scale }] }]}
        />
        <Text style = {styles.title}>Welcome to Cognisaur!</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push("/Account")}
        >
          <Text style={styles.buttonText}>Ready to catch monsters?</Text>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#688C27FF',
  },
  image:{
    width: 300,
    height: 300,
    marginBottom: 20,
    borderRadius: 10,
  },
  animatedValue : new Animated.Value(0),
  title:{
    fontSize: 24,
    fontWeight: 'bold',
  },
  subtitle:{
    fontSize: 16,
    marginBottom: 20,
  },
  button:{
    marginTop: 20,
    backgroundColor: "#B666B3FF",
    borderRadius: 6,
  },
  buttonText:{
    color: "white",
    fontSize: 14,
    fontWeight: "bold",
  },
});