/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import Video from 'react-native-video';

function App(): React.JSX.Element {
  const video = React.useRef<any>(null);
  const [load, setLoad] = useState(false);

  return (
    <View style={styles.container}>
      <Video
        source={{
          uri: 'https://cdn.pixabay.com/video/2023/11/10/188595-883402169_large.mp4',
        }} // Can be a URL or a local file.
        ref={video}
        style={styles.video}
        rate={1}
        volume={10}
        muted={true}
        resizeMode="cover"
        paused={false}
        onError={e => console.log('321321321', e)}
        onLoad={load => console.log(load)}
        repeat={true}
      />
      <Text>asddasdasdas</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  video: {
    alignSelf: 'center',
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});

export default App;
