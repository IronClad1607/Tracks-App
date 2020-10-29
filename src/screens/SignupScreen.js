import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";
import { Context as AuthContext } from "../context/AuthContext";
import Form from "../components/Form";
import NavLink from "../components/NavLink";

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
      <NavLink
        routeName="Signin"
        navText="Already have an account? Sign in instead!"
      />
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
