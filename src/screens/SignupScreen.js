import React, { useState, useContext } from "react";
import { View, StyleSheet } from "react-native";
import { Text, Input, Button } from "react-native-elements";
import Spacer from "../components/Spacer";
import { Context as AuthContext } from "../context/AuthContext";

const SignupScreen = ({ navigation }) => {
  const { state, signup } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <Spacer>
        <Text h3>Sign Up For Tracker</Text>
      </Spacer>
      <Input
        label="Email"
        value={email}
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={(newEmail) => {
          setEmail(newEmail);
        }}
      />
      <Spacer />
      <Input
        label="Password"
        value={password}
        autoCapitalize="none"
        autoCorrect={false}
        secureTextEntry
        onChangeText={(newPassword) => {
          setPassword(newPassword);
        }}
      />
      <Spacer />
      <Spacer>
        <Button title="Sign Up" onPress={() => signup({ email, password })} />
      </Spacer>
    </View>
  );
};

SignupScreen.navigationOptions = () => {
  return {
    headerShown: false,
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginBottom: 100,
  },
});

export default SignupScreen;
