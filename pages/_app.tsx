import type { AppProps } from "next/app";
import "@/styles/global.css";
import { AuthProvider } from "context/AuthContext";
import { CartProvider } from "context/CartContext";
import { FiltersProvider } from "context/FiltersContext";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <AuthProvider>
        <CartProvider>
          <FiltersProvider>
            <Component {...pageProps} />;
          </FiltersProvider>
        </CartProvider>
      </AuthProvider>
    </>
  );
};

export default App;
