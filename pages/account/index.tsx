import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { useAuth } from "context/AuthContext";
import React, { useEffect, useState } from "react";
import supabase from "utils/supabase";
import useForm from "../../hooks/useForm";
const styles = {
  container: "",
  contentContainer: "my-16",
};

const index = () => {
  const { user } = useAuth();
  const { form, setFormData, handleChange } = useForm({
    name: "",
    phoneNumber: "",
    address: "",
  });
  const [userData, setUserData] = useState<any>([]);
  const handleSave = async (e: any) => {
    e.preventDefault();
    const { error } = await supabase
      .from("users")
      .update({
        name: form.name || userData?.name,
        phone_number: form.phoneNumber || userData?.phoneNumber,
        address: form.address || userData?.address,
      })
      .match({ id: user.id });
    if (error) {
      console.log(error);
    }
  };

  const handleResetPassword = async (e: any) => {
    e.preventDefault();
    if (user.id !== "") {
      const { data, error } = await supabase.auth.api.resetPasswordForEmail(
        user.email
      );
      console.log(data);
      if (error) {
        console.log(error);
      }
    }
  };

  async function fetchUserData() {
    const { data, error } = await supabase
      .from("users")
      .select()
      .match({ id: user.id });
    if (!error) {
      setUserData(data?.[0]);
    } else {
      console.log(error);
    }
  }
  useEffect(() => {
    fetchUserData();
  }, [user]);
  useEffect(() => {
    console.log(form);
  }, [form]);
  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.contentContainer}>
        <section className="h-screen bg-gray-100 bg-opacity-50">
          <form className="container max-w-2xl mx-auto shadow-md md:w-3/4">
            <div className="p-4 bg-gray-100 border-t-2 border-indigo-400 rounded-lg bg-opacity-5">
              <div className="max-w-sm mx-auto md:w-full md:mx-0">
                <div className="inline-flex items-center space-x-4">
                  <a href="#" className="block relative">
                    <img
                      alt="profile"
                      src={user.profileImgUrl}
                      className="mx-auto object-cover rounded-full h-16 w-16 "
                    />
                  </a>
                  <h1 className="text-gray-600">{user.name}</h1>
                </div>
              </div>
            </div>
            <div className="space-y-6 bg-white">
              <div className="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
                <h2 className="max-w-sm mx-auto md:w-1/3">Account</h2>
                <div className="max-w-sm mx-auto md:w-2/3">
                  <div className=" relative ">
                    <input
                      type="text"
                      name="email"
                      id="user-info-email"
                      className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                      placeholder={userData?.email || "Email"}
                      onChange={handleChange}
                      readOnly
                      disabled
                    />
                  </div>
                </div>
              </div>
              <hr />
              <div className="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
                <h2 className="max-w-sm mx-auto md:w-1/3">Personal info</h2>
                <div className="max-w-sm mx-auto space-y-5 md:w-2/3">
                  <div>
                    <div className=" relative ">
                      <input
                        type="text"
                        name="name"
                        id="user-info-name"
                        className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                        placeholder={userData?.name || "Name"}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div>
                    <div className=" relative ">
                      <input
                        type="text"
                        name="phoneNumber"
                        id="user-info-phone"
                        className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                        placeholder={userData?.phone_number || "Phone Number"}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div>
                    <div className=" relative ">
                      <textarea
                        name="address"
                        id="user-info-address"
                        className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                        rows={3}
                        placeholder={userData?.address || "Address"}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <hr />
              <div className="hidden">
              <div className=" items-center w-full p-8 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
                <h2 className="max-w-sm mx-auto md:w-4/12">Change password</h2>
                <div className="w-full max-w-sm pl-2 mx-auto space-y-5 md:w-5/12 md:pl-9 md:inline-flex">
                  <div className=" relative ">
                    <input
                      type="text"
                      id="user-info-password"
                      className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                      placeholder="Password"
                    />
                  </div>
                </div>
                <div className="text-center md:w-3/12 md:pl-6">
                  <button
                    type="button"
                    className="py-2 px-4  bg-pink-600 hover:bg-pink-700 focus:ring-pink-500 focus:ring-offset-pink-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                  >
                    Change
                  </button>
                </div>
              </div>
              </div>
              <hr />
              <div className="flex justify-between gap-x-4">
                <button
                  type="submit"
                  onClick={handleResetPassword}
                  className="py-2 ml-4 px-4  bg-pink-600 hover:bg-pink-700 focus:ring-pink-500 focus:ring-offset-pink-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg"
                >
                  Get Password Link
                </button>
                <button
                  type="submit"
                  onClick={handleSave}
                  className="py-2 px-4 mr-4 bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                >
                  Save
                </button>
              </div>

              <hr />
            </div>
          </form>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default index;
