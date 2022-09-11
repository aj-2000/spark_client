import getConfig from "next/config";
import { useEffect } from "react";
import supabase from "utils/supabase";
const { publicRuntimeConfig } = getConfig();
const { name } = publicRuntimeConfig.site;

const Home = () => {
  useEffect(() => {
    console.log(supabase.auth.session()?.user);
  });
  return (
    <>
      {supabase.auth.session()?.user?.id}
      <button
        onClick={async () => {
          supabase.auth.signOut();
        }}
      >
        Log Out;
      </button>
    </>
  );
};

export default Home;
