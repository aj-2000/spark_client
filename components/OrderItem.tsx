import React from "react";
import OrderDescription from "./OrderDescription";
const styles = {
  container: "",
};
export type OrderItem = {
  foodItemId: string;
  name: string;
  price: number;
  quantity: number;
  category: string;
  img_url: string;
};
interface OrderItemProps {
  id: string;
  createdAt: string;
  discount: number;
  lastChangeInStatusAt: string;
  numberOfItems: number;
  orderItems: OrderItem[];
  shippingCharges: number;
  status: string;
  totalAmount: number;
  userId: string;
}
const OrderItem = ({
  id,
  status,
  createdAt,
  orderItems,
  totalAmount,
}: OrderItemProps) => {
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
              {id}
            </p>
          </div>
        </div>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <OrderDescription
          {...{ totalAmount, orderDescriptionItems: orderItems }}
        />
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">
          {createdAt.slice(0, 10)}
        </p>
      </td>
      {status === "CREATED" && (
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <span className="relative inline-block px-3 py-1 font-semibold text-blue-900 leading-tight">
            <span
              aria-hidden="true"
              className="absolute inset-0 bg-blue-200 opacity-50 rounded-full"
            ></span>
            <span className="relative">{status}</span>
          </span>
        </td>
      )}
      {status === "PROCESSING" && (
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <span className="relative inline-block px-3 py-1 font-semibold text-yellow-900 leading-tight">
            <span
              aria-hidden="true"
              className="absolute inset-0 bg-yellow-200 opacity-50 rounded-full"
            ></span>
            <span className="relative">{status}</span>
          </span>
        </td>
      )}
      {status === "DELIVERED" && (
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
            <span
              aria-hidden="true"
              className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
            ></span>
            <span className="relative">{status}</span>
          </span>
        </td>
      )}
      {status === "CANCELED" && (
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <span className="relative inline-block px-3 py-1 font-semibold text-red-900 leading-tight">
            <span
              aria-hidden="true"
              className="absolute inset-0 bg-red-200 opacity-50 rounded-full"
            ></span>
            <span className="relative">{status}</span>
          </span>
        </td>
      )}
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        {status === "CREATED" && (
          <button className="text-indigo-600 hover:text-indigo-900">
            CANCEL
          </button>
        )}
        {status !== "CREATED" && (
          <button disabled className="text-gray-500">
            CANCEL
          </button>
        )}
      </td>
    </tr>
  );
};

export default OrderItem;
