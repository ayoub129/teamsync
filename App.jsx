import React , {useState , useEffect} from 'react';

// navigation
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// context
import AuthContextProvider from './context/AuthContext';

// utils
import { getItem } from './utils/AsyncStorage';

// screens
import Home from './pages/Home';
import Options from './pages/Options';
import Onboarding from './pages/OnBoarding';


// start the stack
const Stack = createStackNavigator();

const App = () => {

  const [showOnboarding, setShowOnboarding] = useState(null);
  
  useEffect(() => {
    checkifAlreadyOnBoard()
  }, [])

  const checkifAlreadyOnBoard = async () =>{
    let onboarded = await getItem("onboarded");
    if(onboarded == 1) {
      setShowOnboarding(false)
    } else {
      setShowOnboarding(true)
    }
  }

  if(showOnboarding == null) {
    return null;
  }

  return (
    <AuthContextProvider>
      <NavigationContainer>
          <Stack.Navigator>
              {showOnboarding && (
                <Stack.Screen name='Onboarding' options={{headerShown: false}} component={Onboarding}></Stack.Screen>
              )}
              <Stack.Screen name='LoginOptions' component={Options}></Stack.Screen>
              <Stack.Screen name="Home" component={Home}></Stack.Screen>
          </Stack.Navigator>
      </NavigationContainer>
    </AuthContextProvider>
  )
}

export default App

