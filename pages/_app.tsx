import type { AppProps } from "next/app";

import "@/styles/global.css";
import { AuthProvider } from "context/AuthContext";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <AuthProvider>
        <Component {...pageProps} />;
      </AuthProvider>
    </>
  );
};

export default App;
