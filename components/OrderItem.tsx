import React from "react";
import OrderDescription from "./OrderDescription";
const styles = {
  container: "",
};
const OrderItem = () => {
  return (
    <tr>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <div className="flex items-center">
          {/* <div className="flex-shrink-0">
            <a href="#" className="block relative">
              <img
                alt="profil"
                src="/images/person/8.jpg"
                className="mx-auto object-cover rounded-full h-10 w-10 "
              />
            </a>
          </div> */}
          <div className="ml-3">
            <p className="text-gray-900 font-bold font-mono whitespace-no-wrap text-xs">
              ca55f4c9-1202-4f1b-8330-68836d4661ce
            </p>
          </div>
        </div>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <OrderDescription/>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">12/09/2020</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
          <span
            aria-hidden="true"
            className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
          ></span>
          <span className="relative">CREATED</span>
        </span>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <a href="#" className="text-indigo-600 hover:text-indigo-900">
          CANCEL
        </a>
      </td>
    </tr>
  );
};

export default OrderItem;
