import { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
  Platform,
  Alert,
} from 'react-native';

import { isClerkAPIResponseError, useSignUp } from '@clerk/clerk-expo';
import { Link, useRouter } from 'expo-router';

import { defaultStyles } from '@/constants/Styles';
import Colors from '@/constants/Colors';

const Page = () => {
  const [countryCode, setCountryCode] = useState('+234');
  const [phoneNumber, setPhoneNumber] = useState('');

  const router = useRouter();
  const { signUp } = useSignUp();

  const keyboardVerticalOffset = Platform.OS === 'ios' ? 70 : 0;

  async function onSignUp() {

    router.push('/(authenticated)/(tabs)/home');

    // const fullPhoneNumber = `${countryCode}${phoneNumber}`;
    // console.log(fullPhoneNumber);

    // try {
    //   console.log('ere');
    //   await signUp?.create({
    //     phoneNumber: fullPhoneNumber,
    //   });

    //   console.log('here');
    //   signUp?.preparePhoneNumberVerification();
    //   console.log('there');

    //   router.push({
    //     pathname: '/verify/[phone]',
    //     params: {
    //       phone: fullPhoneNumber,
    //     },
    //   });
    // } catch (err: any) {
    //   // console.error('Error signing up: ', err.errors);
    //   if (isClerkAPIResponseError(err)) {
    //     if (err.errors[0].code === 'form_identifier_already_exists') {
    //       Alert.alert('Error', err.errors[0].message);
    //     }

    //     if (err.errors[0].code === 'unsupported_country_code') {
    //       Alert.alert(err.errors[0].message, err.errors[0].longMessage, [
    //         {
    //           text: 'Index page regardless',
    //           onPress: () => {
    //             console.log('OKAY Pressed');
    //             router.push('/(authenticated)/(tabs)/home');
    //           },
    //         },
    //       ]);
    //     }
    //   } else {
    //     Alert.alert('Error', 'Something went wrong');
    //   }
    // }
  }

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior='padding'
      keyboardVerticalOffset={keyboardVerticalOffset}
    >
      <View style={defaultStyles.container}>
        <Text style={defaultStyles.header}>Sign Up</Text>
        <Text style={defaultStyles.descriptionText}>
          Enter your phone number. We will send you a confirmation code
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

        <Link href={'/login'} replace asChild>
          <TouchableOpacity>
            <Text style={defaultStyles.textLink}>
              Already have an account? Log in
            </Text>
          </TouchableOpacity>
        </Link>

        <View style={{ flex: 1 }} />

        <TouchableOpacity
          style={[
            defaultStyles.pillButton,
            phoneNumber !== '' ? styles.enabled : styles.disabled,
            { marginBottom: 20, backgroundColor: Colors.black },
          ]}
          onPress={onSignUp}
        >
          <Text style={defaultStyles.buttonText}>Sign Up</Text>
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
