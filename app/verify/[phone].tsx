import { useState, useEffect, Fragment } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Alert,
  Platform,
} from 'react-native';

import {
  isClerkAPIResponseError,
  useSignUp,
  useSignIn,
} from '@clerk/clerk-expo';
import { useRouter, Link, useLocalSearchParams } from 'expo-router';

import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';

import { defaultStyles } from '@/constants/Styles';
import Colors from '@/constants/Colors';

const CELL_COUNT = 6;

const Page = () => {
  const { phone, shouldSignIn } = useLocalSearchParams<{
    phone: string;
    shouldSignIn: string;
  }>();

  const [code, setCode] = useState('');
  const { signUp, setActive } = useSignUp();
  const { signIn } = useSignIn();

  const ref = useBlurOnFulfill({ value: code, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value: code,
    setValue: setCode,
  });

  useEffect(() => {
    if (code.length === 6) {
      console.log(code, 'code');

      if (shouldSignIn === 'true') verifySignIn(); // from sign in screen
      else verifyCode(); // signing up for the first time
    }
  }, [code]);

  async function verifyCode() {
    try {
      await signUp!.attemptPhoneNumberVerification({
        code,
      });

      await setActive!({ session: signUp!.createdSessionId });
    } catch (err) {
      console.error('Error: ', JSON.stringify(err, null, 2));
      if (isClerkAPIResponseError(err)) {
        if (err.errors[0].code === 'form_identifier_not_found') {
          Alert.alert('Error', err.errors[0].message);
        }
      }
    }
  }

  async function verifySignIn() {
    try {
      await signIn!.attemptFirstFactor({
        strategy: 'phone_code',
        code,
      });

      await setActive!({ session: signIn!.createdSessionId });
    } catch (err) {
      console.error('Error: ', JSON.stringify(err, null, 2));
      if (isClerkAPIResponseError(err)) {
        if (err.errors[0].code === 'form_identifier_not_found') {
          Alert.alert('Error', err.errors[0].message);
        }
      }
    }
  }

  return (
    <View style={defaultStyles.container}>
      <Text style={defaultStyles.header}>6-digit code</Text>
      <Text>Code sent to {phone} unless you already have an account</Text>

      <CodeField
        ref={ref}
        {...props}
        // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
        value={code}
        onChangeText={setCode}
        cellCount={CELL_COUNT}
        rootStyle={styles.codeFieldRoot}
        keyboardType='number-pad'
        textContentType='oneTimeCode'
        // autoComplete={Platform.select({
        //   android: 'sms-otp',
        //   default: 'one-time-code',
        // })}
        testID='my-code-input'
        renderCell={({ index, symbol, isFocused }) => (
          <Fragment key={index}>
            <View
              onLayout={getCellOnLayoutHandler(index)}
              key={index}
              style={[styles.cellRoot, isFocused && styles.focusCell]}
            >
              <Text style={styles.cellText}>
                {symbol || (isFocused ? <Cursor /> : null)}
              </Text>
            </View>
            {index == 2 ? (
              <View key={`separator-${index}`} style={styles.separator} />
            ) : null}
          </Fragment>
        )}
      />

      <Link href={'/login'} replace asChild>
        <TouchableOpacity>
          <Text style={defaultStyles.textLink}>
            Already have an account? Log in
          </Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
};

export default Page;

const styles = StyleSheet.create({
  codeFieldRoot: {
    marginVertical: 20,
    marginLeft: 'auto',
    marginRight: 'auto',
    gap: 12,
  },

  cellRoot: {
    width: 45,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.lightGray,
  },

  cellText: {
    color: '#000',
    fontSize: 36,
    textAlign: 'center',
  },

  focusCell: {
    paddingBottom: 8,
  },

  separator: {
    height: 2,
    width: 10,
    backgroundColor: Colors.gray,
    alignSelf: 'center',
  },
});
