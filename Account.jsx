import { useRouter } from "expo-router";
import { useState } from "react";
import { Button, Image, StyleSheet, Switch, Text, View } from "react-native";
import { TextInput } from "react-native-web";
import Icon from '../assets/images/profile.png';

export default function AccountScreen() {
  const [text, setText] = useState('');
  const [password, setPassword] = useState('');
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const router = useRouter(); //gives navigation access
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome Back Adventurer!</Text>
      <Image source = {Icon} style = {styles.icon}/>
      <TextInput
        placeholder="Username"
        style={styles.input}
        onChangeText={setText}
        value={text}
      />
      <TextInput
        placeholder="Password"
        style={styles.input}
        onChangeText={setPassword}
        value={password}
      />
      <View style={styles.switch}>
            <Switch
            trackColor={{false: '#B666B3FF', true: '#B666B3FF'}}
            thumbColor={isEnabled ? 'white' : 'white'}
            ios_backgroundColor="#B666B3FF"
            onValueChange={toggleSwitch}
            value={isEnabled}
            />
            <Text color="white">Remember me</Text>
      </View>
      <Button
        title = "Login"
        color = '#B666B3FF'
        style={styles.button}
        onPress={() => router.push("/leaderboard")}>
      </Button>
      <Text style={styles.input}>Continue with Apple</Text>
      <Text style={styles.input}>Continue with Google</Text>
      <Text style={styles.input}>Continue with Facebook</Text>
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
  container2 : {
    flex : 1,
    flexDirection : "row",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: '#688C27FF',
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color : "white",
    paddingVertical: 5,
  },
  icon: {
    width: 30,
    height: 30,
    paddingVertical: 10,
  },
  input: {
    justifyContent: "center",
    alignItems: "center",
    width: '80%',
    color: "white",
    height: 40,
    borderColor: "white",
    backgroundColor : "black",
    opacity: 0.6,
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius : 20,
  },
  switch:{
    flex:-1,
    alignSelf:"center",
    marginLeft:"20%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    width: '100%',
  },
  button:{
    width: '100%',
    flex: 1,
    height: 60,
    backgroundColor: 'white',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
});