import React, { useEffect, useState } from "react";
import { useAuth } from "context/AuthContext";
import { useCart } from "context/CartContext";
import supabase from "utils/supabase";
import useLocalStorage from "../hooks/useLocalStorage";
import CartIcon from "./CartIcon";
import { useRouter } from 'next/router'
const styles = {
  active: "text-gray-800 dark:text-white  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium",
  notActive: "text-gray-300  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium"
}
const Navbar = () => {
  const [isMenuHidden, setIsMenuHidden] = useState(false);
  const router = useRouter();

  const { getItem } = useLocalStorage();
  const { user, isLoading, errorMessage, login, logout, loadUser, signup } =
    useAuth();
  const { cart, setCartData, increaseQuantity, decreaseQuantity } = useCart();
  async function loadUserFromLocalStorage() {
    const userData = getItem("sparks_food_user");
    if (userData) {
      loadUser(userData);
    }
  }
  async function fetchCartData(userId: string) {
    const { data, error } = await supabase
      .from("carts")
      .select()
      .match({ user_id: userId });

    if (data) {
      const cartData = {
        userId: data[0]?.user_id,
        numberOfItems: data[0]?.number_of_items,
        totalAmount: data[0]?.total_amount,
        shippingCharges: data[0]?.shipping_charges,
        discount: data[0]?.discount,
        cartItems: data[0]?.cart_items,
      };
      setCartData(cartData);
    }
  }
  const handleMenuToggle = (e: any) => {
    setIsMenuHidden(!isMenuHidden);
  };
  useEffect(() => {
    loadUserFromLocalStorage().then(() => {
      fetchCartData(user.id);
    });
  }, [user.id]);
  return (
    <div>
      <div>
        <nav className="bg-white dark:bg-gray-800  shadow ">
          <div className="max-w-7xl mx-auto px-8">
            <div className="flex items-center justify-between h-16">
              <div className=" flex items-center">
                <a className="flex-shrink-0" href="/">
                  <img
                    className="h-20 w-20"
                    src="/images/spark_logo_black.png"
                    alt="Workflow"
                  />
                </a>
                <div className="hidden md:block">
                  <div className="ml-10 flex items-baseline space-x-4">
                    <a
                      className={`${router.pathname === '/story' ? styles.active : styles.notActive }`}
                      href="/story"
                    >
                      Our Story
                    </a>
                    <a
                      className={`${router.pathname === '/menu' ? styles.active : styles.notActive }`}
                      href="/menu"
                    >
                      Menu
                    </a>
                    {user.id === "" && (
                      <>
                        <a
                          className={`${router.pathname === '/auth/login' ? styles.active : styles.notActive }`}
                          href="/auth/login"
                        >
                          Login
                        </a>
                        <a
                          className={`${router.pathname === '/auth/register' ? styles.active : styles.notActive }`}
                          href="/auth/register"
                        >
                          Register
                        </a>
                      </>
                    )}
                  </div>
                </div>
              </div>
              <div className="block">
                <div className="ml-4 flex items-center md:ml-6">
                  <div className="ml-3 relative">
                    <div className="relative inline-block text-left">
                      <div className="flex gap-x-8">
                        <CartIcon />
                        <button
                          onClick={handleMenuToggle}
                          type="button"
                          className="  flex items-center justify-center w-full rounded-md  px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-50 hover:bg-gray-50 dark:hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-gray-500"
                          id="options-menu"
                        >
                          {user.id === "" ? (
                            <svg
                              width="20"
                              fill="currentColor"
                              height="20"
                              className="text-gray-800"
                              viewBox="0 0 1792 1792"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M1523 1339q-22-155-87.5-257.5t-184.5-118.5q-67 74-159.5 115.5t-195.5 41.5-195.5-41.5-159.5-115.5q-119 16-184.5 118.5t-87.5 257.5q106 150 271 237.5t356 87.5 356-87.5 271-237.5zm-243-699q0-159-112.5-271.5t-271.5-112.5-271.5 112.5-112.5 271.5 112.5 271.5 271.5 112.5 271.5-112.5 112.5-271.5zm512 256q0 182-71 347.5t-190.5 286-285.5 191.5-349 71q-182 0-348-71t-286-191-191-286-71-348 71-348 191-286 286-191 348-71 348 71 286 191 191 286 71 348z"></path>
                            </svg>
                          ) : (
                            <img
                              src={user.profileImgUrl}
                              width={20}
                              height={20}
                            />
                          )}
                        </button>
                      </div>
                      <div
                        className={`${
                          !isMenuHidden && "hidden"
                        } origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 z-50`}
                      >
                        <div
                          className="py-1 "
                          role="menu"
                          aria-orientation="vertical"
                          aria-labelledby="options-menu"

                        >
                          <a
                            href="/orders"
                            className="block px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600"
                            role="menuitem"
                          >
                            <span className="flex flex-col">
                              <span>My Orders</span>
                            </span>
                          </a>
                          <a
                            href="/account"
                            className="block px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600"
                            role="menuitem"
                          >
                            <span className="flex flex-col">
                              <span>Account</span>
                            </span>
                          </a>
                          {user.id !== "" && (
                            <button
                              onClick={logout}
                              className="block px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600"
                              role="menuitem"
                            >
                              <span className="flex flex-col">
                                <span>Logout</span>
                              </span>
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="-mr-2 flex md:hidden">
                {/* <button className="text-gray-800 dark:text-white hover:text-gray-300 inline-flex items-center justify-center p-2 rounded-md focus:outline-none">
                  <svg
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="h-8 w-8"
                    viewBox="0 0 1792 1792"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z"></path>
                  </svg>
                </button> */}
              </div>
            </div>
          </div>
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a
                className="text-gray-300 hover:text-gray-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                href="/story"
              >
                Our Story
              </a>
              <a
                className="text-gray-800 dark:text-white block px-3 py-2 rounded-md text-base font-medium"
                href="/menu"
              >
                Menu
              </a>
              <a
                className="text-gray-300 hover:text-gray-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                href="/auth/login"
              >
                Login
              </a>
              <a
                className="text-gray-300 hover:text-gray-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                href="/auth/register"
              >
                Register
              </a>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
