import { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
  Platform,
} from 'react-native';
import { defaultStyles } from '@/constants/Styles';
import { Link, useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import Colors from '@/constants/Colors';

enum SignInType {
  Phone,
  Email,
  Google,
  Apple,
}

const Page = () => {
  const [countryCode, setCountryCode] = useState('+234');
  const [phoneNumber, setPhoneNumber] = useState('');

  const router = useRouter();

  const keyboardVerticalOffset = Platform.OS === 'ios' ? 70 : 0;

  function onSignIn(type: SignInType) {
    // if (type === SignInType.Phone) {
    //   return;
    // }
    router.push('/(tabs)/dashboard');
    return;
  }

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior='padding'
      keyboardVerticalOffset={keyboardVerticalOffset}
    >
      <View style={defaultStyles.container}>
        <Text style={defaultStyles.header}>Welcome back</Text>
        <Text style={defaultStyles.descriptionText}>
          Enter your phone number associated with your account
        </Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder='Country code'
            placeholderTextColor={Colors.gray}
            value={countryCode}
          />
          <TextInput
            style={[styles.input, { flex: 1 }]}
            placeholder='Mobile Number'
            keyboardType='numeric'
            placeholderTextColor={Colors.gray}
            value={phoneNumber}
            onChangeText={setPhoneNumber}
          />
        </View>

        {/* <View style={{ flex: 1 }} /> */}

        <TouchableOpacity
          style={[
            defaultStyles.pillButton,
            phoneNumber !== '' ? styles.enabled : styles.disabled,
            { marginBottom: 20, backgroundColor: Colors.black },
          ]}
          onPress={() => onSignIn(SignInType.Phone)}
        >
          <Text style={defaultStyles.buttonText}>Continue</Text>
        </TouchableOpacity>

        <View style={{ flexDirection: 'row', gap: 16, alignItems: 'center' }}>
          <View
            style={{
              flex: 1,
              height: StyleSheet.hairlineWidth,
              backgroundColor: Colors.gray,
            }}
          />
          <Text style={{ color: Colors.gray, fontSize: 20 }}>or</Text>
          <View
            style={{
              flex: 1,
              height: StyleSheet.hairlineWidth,
              backgroundColor: Colors.gray,
            }}
          />
        </View>

        <TouchableOpacity
          onPress={() => onSignIn(SignInType.Phone)}
          style={[
            defaultStyles.pillButton,
            {
              flexDirection: 'row',
              marginTop: 20,
              gap: 16,
              backgroundColor: '#fff',
            },
          ]}
        >
          <Ionicons color={'#000'} name='mail' size={34} />
          <Text style={[defaultStyles.buttonText, { color: '#000' }]}>
            Continue with email
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => onSignIn(SignInType.Phone)}
          style={[
            defaultStyles.pillButton,
            {
              flexDirection: 'row',
              marginTop: 20,
              gap: 16,
              backgroundColor: '#fff',
            },
          ]}
        >
          <Ionicons color={'#000'} name='logo-google' size={34} />
          <Text style={[defaultStyles.buttonText, { color: '#000' }]}>
            Continue with email
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => onSignIn(SignInType.Phone)}
          style={[
            defaultStyles.pillButton,
            {
              flexDirection: 'row',
              marginTop: 20,
              gap: 16,
              backgroundColor: '#fff',
            },
          ]}
        >
          <Ionicons color={'#000'} name='logo-apple' size={34} />
          <Text style={[defaultStyles.buttonText, { color: '#000' }]}>
            Continue with email
          </Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Page;

const styles = StyleSheet.create({
  inputContainer: {
    marginVertical: 40,
    flexDirection: 'row',
  },

  input: {
    backgroundColor: Colors.lightGray,
    padding: 20,
    borderRadius: 16,
    fontSize: 20,
    marginRight: 10,
  },

  enabled: {
    backgroundColor: Colors.primary,
  },

  disabled: {
    backgroundColor: Colors.primaryMuted,
  },
});
