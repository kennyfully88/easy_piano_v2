import React, {useRef, useState} from 'react';
import {StyleSheet, View} from 'react-native';

import easyPianoData from '../assets/json/easyPianoData.json';
import {Gesture, GestureDetector} from 'react-native-gesture-handler';

import PianoKey from './PianoKey';

const soundFiles = {
  do: require('../assets/audio/do.wav'),
  re: require('../assets/audio/re.wav'),
  mi: require('../assets/audio/mi.wav'),
  fa: require('../assets/audio/fa.wav'),
  so: require('../assets/audio/so.wav'),
  la: require('../assets/audio/la.wav'),
  ti: require('../assets/audio/ti.wav'),
  do2: require('../assets/audio/do2.wav'),
};

const AppMain = () => {
  const [pianoData, setPianoData] = useState(easyPianoData.pianoData);

  const ref0 = React.createRef();

  return (
    <View style={styles.appMain}>
      <PianoKey
        pianoData={pianoData[0]}
        soundFile={soundFiles.do}
        refer={ref0}
      />
      <PianoKey
        pianoData={pianoData[1]}
        soundFile={soundFiles.re}
        refer={ref0}
      />
      <PianoKey
        pianoData={pianoData[2]}
        soundFile={soundFiles.mi}
        refer={ref0}
      />
      <PianoKey
        pianoData={pianoData[3]}
        soundFile={soundFiles.fa}
        refer={ref0}
      />
      <PianoKey
        pianoData={pianoData[4]}
        soundFile={soundFiles.so}
        refer={ref0}
      />
      <PianoKey
        pianoData={pianoData[5]}
        soundFile={soundFiles.la}
        refer={ref0}
      />
      <PianoKey
        pianoData={pianoData[6]}
        soundFile={soundFiles.ti}
        refer={ref0}
      />
      <PianoKey
        pianoData={pianoData[7]}
        soundFile={soundFiles.do2}
        refer={ref0}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  appMain: {
    flexDirection: 'row',
    flex: 8,
    backgroundColor: '#C4A484',
  },
});

export default AppMain;
