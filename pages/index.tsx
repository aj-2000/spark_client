import getConfig from "next/config";
import { useRouter } from "next/router";
import { useEffect } from "react";

const { publicRuntimeConfig } = getConfig();
const { name } = publicRuntimeConfig.site;

const Home = () => {
  const router = useRouter();
  useEffect(() => {
    router.push("/menu");
  }, [])
  return (
    <>
      <p>Redirecting to Menu Page...</p>
    </>
  )
}

export default Home;
