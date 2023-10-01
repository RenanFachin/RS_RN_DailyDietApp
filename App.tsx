import { Loading } from '@components/Loading'
import { Routes } from '@routes/index'

import { Success } from '@screens/Success'

// Themes
import { ThemeProvider } from 'styled-components/native'
import theme from '@theme/index'

// Fontes
import { useFonts, NunitoSans_400Regular, NunitoSans_700Bold } from '@expo-google-fonts/nunito-sans'
import { StatusBar } from 'react-native'

export default function App() {
  const [fontsLoaded] = useFonts({ NunitoSans_400Regular, NunitoSans_700Bold })

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor='transparent'
        translucent={true}
      />

      {/* {fontsLoaded ? <Routes /> : <Loading />} */}
      {fontsLoaded ? <Routes /> : <Loading />}

    </ThemeProvider>
  );
}