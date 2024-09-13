import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { defaultStyles } from '@/constants/Styles';
import { useAssets } from 'expo-asset';
import { ResizeMode, Video } from 'expo-av';
import { Link } from 'expo-router';
import Colors from '@/constants/Colors';

const Page = () => {
  const [assets] = useAssets([require('@/assets/videos/intro2.mp4')]);

  return (
    <View style={styles.container}>
      {assets && (
        <Video
          resizeMode={ResizeMode.COVER}
          isMuted
          isLooping
          shouldPlay
          source={{ uri: assets[0].uri }}
          style={styles.video}
        />
      )}
      <View style={{ marginTop: 80, padding: 20 }}>
        <Text style={styles.header}>
          Ready to change the way you manage money?
        </Text>
      </View>

      <View style={styles.buttons}>
        <Link
          href={'/login'}
          asChild
          style={[
            defaultStyles.pillButton,
            { flex: 1, backgroundColor: Colors.dark },
          ]}
        >
          <TouchableOpacity>
            <Text style={{ color: 'white', fontWeight: '500', fontSize: 22 }}>
              Log in
            </Text>
          </TouchableOpacity>
        </Link>
        <Link
          href={'/signup'}
          asChild
          style={[
            defaultStyles.pillButton,
            { flex: 1, backgroundColor: '#fff' },
          ]}
        >
          <TouchableOpacity>
            <Text style={{ fontWeight: '500', fontSize: 22 }}>Sign Up</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  );
};

export default Page;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },

  video: {
    height: '100%',
    width: '100%',
    position: 'absolute',
  },

  header: {
    fontSize: 36,
    fontWeight: '900',
    textTransform: 'uppercase',
    color: 'white',
  },

  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 20,
    marginBottom: 60,
    paddingHorizontal: 20,
  },
});
