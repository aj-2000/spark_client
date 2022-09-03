import supabase from "utils/supabase";
import { createContext, ReactNode, useContext, useState } from "react";
export const emptyUser = {
  name: "",
  email: "",
  profileImgUrl: "",
  id: "",
};
type user = {
  name: string;
  email: string;
  profileImgUrl: string;
  id: string;
};

type authContextType = {
  user: user;
  isLoading: boolean;
  errorMessage: string;
  login: () => void;
  logout: () => void;
  signup: () => void;
};

const authContextDefaultValues: authContextType = {
  user: emptyUser,
  isLoading: false,
  errorMessage: "",
  login: () => {},
  logout: () => {},
  signup: () => {},
};

const AuthContext = createContext<authContextType>(authContextDefaultValues);

export function useAuth() {
  return useContext(AuthContext);
}

type Props = {
  children: ReactNode;
};

export function AuthProvider({ children }: Props) {
  const [user, setUser] = useState<user>(emptyUser);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const login = async () => {
    setIsLoading(true);
    const { user, session, error } = await supabase.auth.signIn({
      email: "hi@ajaysharma.dev",
      password: "ajay123!@#",
    });
    if (error) {
      setErrorMessage(error?.message);
    }
    setUser({
      name: user?.user_metadata!.full_name || "",
      email: user?.email || "",
      profileImgUrl:
        "https://jaigkxhrkwvcyqqlvfmn.supabase.co/storage/v1/object/public/sparks/avatars/banana.png" ||
        "",
      id: user?.id || "",
    });
    setIsLoading(false);
  };

  const logout = async () => {
    setIsLoading(true);
    setUser(emptyUser);
    const { error } = await supabase.auth.signOut();
    console.log(error);
    if (error) {
      setErrorMessage(error?.message);
    }
    setIsLoading(false);
  };
  const signup = async () => {
    setIsLoading(true);
    const { user, session, error } = await supabase.auth.signUp(
      {
        email: "hi@ajaysharma.dev",
        password: "ajay123!@#",
      },
      {
        data: {
          name: "Ajay Sharma",
        },
      }
    );
    console.log(user);
    if (error) {
      setErrorMessage(error?.message);
    }
    setIsLoading(false);
  };

  const value = {
    user,
    isLoading,
    errorMessage,
    login,
    logout,
    signup,
  };

  return (
    <>
      <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    </>
  );
}
