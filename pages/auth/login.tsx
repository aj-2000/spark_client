import AuthForm from "@/components/AuthForm";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";

const styles = {
  container: "gap-16",
  authFormBox: "flex flex-col mt-16 items-center w-full h-full",
};

const register = () => {
  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.authFormBox}>
        <AuthForm />
      </div>
      <Footer />
    </div>
  );
};

export default register;
