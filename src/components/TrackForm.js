import React, { useContext } from "react";
import { Input, Button } from "react-native-elements";
import Spacer from "./Spacer";
import { Context as LocationContext } from "../context/LocationContext";

const TrackForm = () => {
  const {
    state: { name, isRecording,locations },
    startRecording,
    stopRecording,
    changeName,
  } = useContext(LocationContext);

  console.log(locations.length);

  return (
    <>
      <Spacer>
        <Input
          placeholder="Enter Name"
          onChangeText={changeName}
          value={name}
        />
      </Spacer>
      <Spacer>
        {isRecording ? (
          <Button title="Stop" onPress={stopRecording} />
        ) : (
          <Button title="Start" onPress={startRecording} />
        )}
      </Spacer>
    </>
  );
};

export default TrackForm;
