import React from "react";
import QuantityInput from "./QuantityInput";

const styles = {
  container: "",
  contentContainer: "flex",
  productDetailsContainer: "flex grow-[2]",
  quantityContainer: "flex grow",
  priceContainer: "grow",
  totalContainer: "grow",
  foodImageContainer: "flex grow",
  foodDetailsContainer: "flex flex-col justify-between grow",
  quantity: "mx-2 border text-center w-8",
};

const CartItem = () => {
  return (
    <tr>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <a href="#" className="block relative">
              <img
                alt="profil"
                src="/images/samosa.png"
                className="mx-auto object-cover rounded-full h-10 w-10 "
              />
            </a>
          </div>
          <div className="ml-3">
            <p className="text-gray-900 whitespace-no-wrap">Samosa</p>
          </div>
        </div>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <QuantityInput/>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">20 RS.</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
          <span
            aria-hidden="true"
            className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
          ></span>
          <span className="relative">100 RS.</span>
        </span>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <a href="#" className="text-indigo-600 hover:text-indigo-900">
          Remove
        </a>
      </td>
    </tr>
  );
};

export default CartItem;
