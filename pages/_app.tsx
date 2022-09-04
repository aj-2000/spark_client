import type { AppProps } from "next/app";

import "@/styles/global.css";
import { AuthProvider } from "context/AuthContext";
import { CartProvider } from "context/CartContext";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <AuthProvider>
        <CartProvider>
          <Component {...pageProps} />;
        </CartProvider>
      </AuthProvider>
    </>
  );
};

export default App;
