import "../_mockLocation";
import React, { useContext,useCallback } from "react";
import { StyleSheet } from "react-native";
import { Text, Button, Input } from "react-native-elements";
import { SafeAreaView, withNavigationFocus } from "react-navigation";
import Map from "../components/Map";
import TrackForm from "../components/TrackForm";
import { Context as LocationContext } from "../context/LocationContext";
import useLocation from "../hooks/useLocations";

const TrackCreateScreen = ({ isFocused }) => {
  const { addLocation, state } = useContext(LocationContext);
  const callback = useCallback( (location) => {
    addLocation(location, state.isRecording);
  },[state.isRecording])

  const [err] = useLocation(isFocused || state.isRecording,callback);

  return (
    <SafeAreaView forceInset={{ top: "always" }}>
      <Text h2> Create A Track</Text>
      <Map />
      {err ? <Text>Please enable location services</Text> : null}
      <TrackForm />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default withNavigationFocus(TrackCreateScreen);
