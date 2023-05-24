import React, {useRef, useMemo, useState} from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {Gesture, GestureDetector} from 'react-native-gesture-handler';
import {Audio} from 'expo-av';

const PianoKey = (props: any) => {
  const [keyPressed, setKeyPressed] = useState(false);
  const [sound, setSound] = useState();

  const playSound = async () => {
    const {sound} = await Audio.Sound.createAsync(props.soundFile);

    setSound(sound);

    await sound.playAsync();
  };

  React.useEffect(() => {
    return sound
      ? () => {
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  const tapGestureStart = Gesture.Tap().onBegin(() => {
    setKeyPressed(true);
    playSound();
  });

  const tapGestureEnd = Gesture.Tap().onFinalize(() => setKeyPressed(false));

  return (
    <GestureDetector
      gesture={Gesture.Simultaneous(tapGestureStart, tapGestureEnd)}>
      <Pressable
        ref={props.refer}
        simultaneousHandlers={props.refer}
        style={[
          styles.pianoKey,
          {
            backgroundColor: props.pianoData.color,
          },
          keyPressed && styles.pianoKeyPressed,
          {
            backgroundColor: keyPressed
              ? props.pianoData.pressedColor
              : props.pianoData.color,
          },
        ]}>
        <View style={styles.bump}></View>

        <Text
          style={
            props.pianoData.id === 1 ? styles.appMainText2 : styles.appMainText
          }>
          {props.pianoData.soundName}
        </Text>
      </Pressable>
    </GestureDetector>
  );
};

const styles = StyleSheet.create({
  bump: {
    backgroundColor: 'white',
    width: 48,
    height: 48,
    borderRadius: 48,
    borderWidth: 5,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: 0.7,
    shadowRadius: 3,
    padding: 5,
  },
  appMainText2: {color: 'black', fontSize: 32, fontWeight: 'bold'},
  appMainText: {color: 'white', fontSize: 32, fontWeight: 'bold'},
  pianoKey: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '95%',
    borderWidth: 2,
    borderColor: 'black',
    borderTopWidth: 0,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: 0.7,
    shadowRadius: 3,
    padding: 5,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  pianoKeyPressed: {
    height: '99%',
    shadowOffset: {width: 0, height: 0},
  },
});

export default PianoKey;
