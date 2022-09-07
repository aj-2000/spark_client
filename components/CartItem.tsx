import { useCart } from "context/CartContext";
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

interface CartItemProps {
  id: string;
  name: string;
  category: string;
  price: number;
  quantity: number;
  image_url: string;
}

const CartItem = ({
  id,
  name,
  category,
  price,
  quantity,
  image_url,
}: CartItemProps) => {
  const { removeItem } = useCart();
  return (
    <tr>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <a href="#" className="block relative">
              <img
                alt="profil"
                src={image_url}
                className="mx-auto object-cover rounded-full h-10 w-10 "
              />
            </a>
          </div>
          <div className="ml-3">
            <p className="text-gray-900 whitespace-no-wrap">{name}</p>
          </div>
        </div>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <QuantityInput {...{ foodItemId: id, quantity, price }} />
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">{price} RS.</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
          <span
            aria-hidden="true"
            className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
          ></span>
          <span className="relative">{quantity * price} RS.</span>
        </span>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <button
          onClick={() => {
            removeItem(id, price);
          }}
          className="text-indigo-600 hover:text-indigo-900"
        >
          Remove
        </button>
      </td>
    </tr>
  );
};

export default CartItem;
