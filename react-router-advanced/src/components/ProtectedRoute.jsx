import {  createContext , useState, useContext} from 'react'

export const AuthContext = createContext(null) 

export const ProtectedRoute = ( {children} ) => {

    const [user , setUser] = useState(null)

    const login = (user)=>{
        setUser(user)
    }
    const logout = ()=>{
        setUser(null)
    }

  return (
        <AuthContext.Provider value={{user , login , logout}}>
            {children}
        </AuthContext.Provider>
  )
}
export const useAuth = () => {
    return useContext(AuthContext)
} 

export const ProtectedRoute = ({ children }) => {
    const { user } = useAuth();
  
    if (!user) {
      return <Navigate to="/login" />;
    }
  
    return children;
  };

