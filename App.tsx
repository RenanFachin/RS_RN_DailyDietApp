import { Loading } from '@components/Loading'
import { Summary } from '@screens/Summary'

// Themes
import { ThemeProvider } from 'styled-components/native'
import theme from '@theme/index'

// Fontes
import { useFonts, NunitoSans_400Regular, NunitoSans_700Bold } from '@expo-google-fonts/nunito-sans'

export default function App() {
  const [fontsLoaded] = useFonts({ NunitoSans_400Regular, NunitoSans_700Bold })

  return (
    <ThemeProvider theme={theme}>

      {fontsLoaded ? <Summary /> : <Loading />}
      
    </ThemeProvider>
  );
}