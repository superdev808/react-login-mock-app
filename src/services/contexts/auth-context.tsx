import React, { ReactNode, createContext, useState } from "react"

interface AuthContextProps {
  isAuthenticated: boolean;
  setAuthenticated: (_authenticated: boolean) => {};
}

export const AuthContext = createContext({
  isAuthenticated: false,
  setAuthenticated: (f) => f,
} as AuthContextProps);

interface AuthProviderProps {
  children?: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = (props: any) => {
  const [isAuthenticated, setAuthenticated] = useState<boolean>(false);
  return (
    <AuthContext.Provider
      {...props}
      value={{
        isAuthenticated,
        setAuthenticated,
      }} />
  )
}