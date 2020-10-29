import React, { useContext } from "react";
import { View, StyleSheet, Text } from "react-native";
import Form from "../components/Form";
import NavLink from "../components/NavLink";
import { Context as AuthContext } from "../context/AuthContext";

const SigninScreen = () => {
  const { state, signin } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <Form
        headerText="Sign In For Tracker"
        submitButtonText="Sign In"
        onSubmit={signin}
        errorMessage={state.errorMessage}
      />
      <NavLink
        navText="Don't have an account? Sign Up instead"
        routeName="Signup"
      />
    </View>
  );
};

SigninScreen.navigationOptions = () => {
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

export default SigninScreen;
