import '../shared/global.css';
import 'expo-dev-client';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider as NavThemeProvider } from '@react-navigation/native';

import {
  useColorScheme,
  useInitialAndroidBarSync,
} from '@/src/shared/lib/useColorScheme';
import { NAV_THEME } from '@/src/shared/theme';
import { Slot } from 'expo-router';

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

export default function RootLayout() {
  useInitialAndroidBarSync();
  const { colorScheme, isDarkColorScheme } = useColorScheme();

  return (
    <>
      <StatusBar
        key={`root-status-bar-${isDarkColorScheme ? 'light' : 'dark'}`}
        style={isDarkColorScheme ? 'light' : 'dark'}
      />

      <NavThemeProvider value={NAV_THEME[colorScheme]}>
        <Slot />
      </NavThemeProvider>
    </>
  );
}
