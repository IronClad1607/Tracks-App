import React, { useContext } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Text } from "react-native-elements";
import Spacer from "../components/Spacer";
import { Context as AuthContext } from "../context/AuthContext";
import Form from "../components/Form";

const SignupScreen = ({ navigation }) => {
  const { state, signup } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <Form
        headerText="Sign Up For Tracker"
        onSubmit={signup}
        errorMessage={state.errorMessage}
        submitButtonText="Sign Up"
      />
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Signin");
        }}
      >
        <Spacer>
          <Text style={styles.link}>
            Already have an account? Sign in instead
          </Text>
        </Spacer>
      </TouchableOpacity>
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
  link: {
    color: "blue",
  },
});

export default SignupScreen;
