import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useEffect, useState } from "react";

// create the context
export const AuthContext = createContext({
    token : "",
    isAuthenticated: false,
    login: (token) => {},
    logout: () => {},
})


// context provider
const AuthContextProvider = ({children}) => {

    const [token, setToken] = useState("")

    // check for the token
    useEffect(() => {
        async function fetchToken() {
            const storedToken = await AsyncStorage.getItem("token");
      
            if (storedToken) {
                setToken(storedToken);
            }
          }
      
          fetchToken();
    }, [])

    // login
    function login(token) {
        setToken(token)
        AsyncStorage.setItem("token", token);
    }

    // logout
    function logout() {
        setToken(null)
        AsyncStorage.removeItem("token");
    }

    // values will be used by the app context
    const value = {
        token: token,
        isAuthenticated: !!token,
        login: login,
        logout: logout, 
    }

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}


export default AuthContextProvider;