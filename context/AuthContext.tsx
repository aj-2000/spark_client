import supabase from "utils/supabase";
import { createContext, ReactNode, useContext, useState } from "react";
import {useCart} from "./CartContext";
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
  login: (email: string, password: string) => void;
  logout: () => void;
  signup: (name: string, email: string, password: string) => void;
};

const authContextDefaultValues: authContextType = {
  user: emptyUser,
  isLoading: false,
  errorMessage: "",
  login: (email: string, password: string) => {},
  logout: () => {},
  signup: (name: string, email: string, password: string) => {},
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
  const { cart, setCartData } = useCart();
  const login = async (email: string, password: string) => {
    setIsLoading(true);
    const { user, session, error } = await supabase.auth.signIn({
      email: email || "hi@ajaysharma.dev",
      password: password || "ajay123!@#",
    });
    if (error) {
      setErrorMessage(error?.message);
    }
    setUser({
      name: user?.user_metadata.name || "",
      email: user?.email || "",
      profileImgUrl:
        "https://jaigkxhrkwvcyqqlvfmn.supabase.co/storage/v1/object/public/sparks/avatars/banana.png" ||
        "",
      id: user?.id || "",
    });
    if (!error) {
      const { data, error } = await supabase
        .from("users")
        .update({ is_email_verified: true })
        .match({ id: user?.id });
      if (error) {
        setErrorMessage(error?.message);
      }
      if (!error) {
        const { data, error } = await supabase
          .from("carts")
          .select()
          .eq("user_id", user?.id);

        if (data) {
          console.log(data[0]);
          const cartData = {
            userId: data[0]?.user_id,
            numberOfItems: data[0]?.number_of_items,
            totalAmount: data[0]?.total_amount,
            shippingCharges: data[0]?.shipping_charges,
            discount: data[0]?.discount,
            cartItems: data[0]?.cart_items,
          };
          console.log(data[0]?.user_id)
          setCartData(cartData)
        }
      }
    }

    console.log(cart);
    setIsLoading(false);
  };

  const logout = async () => {
    setIsLoading(true);
    setUser(emptyUser);
    const { error } = await supabase.auth.signOut();
    if (error) {
      setErrorMessage(error?.message);
    }
    setIsLoading(false);
  };
  const signup = async (name: string, email: string, password: string) => {
    setIsLoading(true);
    const { user, session, error } = await supabase.auth.signUp(
      {
        email: email || "hi@ajaysharma.dev",
        password: password || "ajay123!@#",
      },
      {
        data: {
          name: name || "Ajay Sharma",
        },
      }
    );
    if (!error) {
      const { data, error } = await supabase
        .from("users")
        .insert([{ id: user?.id, name: name, email: email }]);
      if (error) {
        setErrorMessage(error?.message);
      }
      if (!error) {
        const { data, error } = await supabase.from("carts").insert([
          {
            user_id: user?.id,
            number_of_items: 0,
            total_amount: 0,
            shipping_charges: 0,
            discount: 0,
            cart_items: [],
          },
        ]);
        if (error) {
          setErrorMessage(error?.message);
        }
      }
    }
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
