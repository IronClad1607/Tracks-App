import React, { useContext } from "react";
import { Input, Button } from "react-native-elements";
import Spacer from "./Spacer";
import { Context as LocationContext } from "../context/LocationContext";
import useSaveTrack from "../hooks/useSaveTrack";

const TrackForm = () => {
  const [saveTrack] = useSaveTrack();


  const {
    state: { name, isRecording, locations },
    startRecording,
    stopRecording,
    changeName,
  } = useContext(LocationContext);

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
      <Spacer>
        {!isRecording && locations.length ? (
          <Button title="Save Track" onPress={saveTrack}/>
        ) : null}
      </Spacer>
    </>
  );
};

export default TrackForm;
