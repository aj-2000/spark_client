import { useCart } from "context/CartContext";
import { useRouter } from "next/router";
import { useState } from "react";
import supabase from "utils/supabase";
const styles = {
  container: "flex flex-col gap-y-4 py-16 px-8 shadow-lg rounded-lg",
  pinkButton:
    "py-2 px-4  bg-pink-600 hover:bg-pink-700 focus:ring-pink-500 focus:ring-offset-pink-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg",
  greenButton:
    "py-2 px-4  bg-green-600 hover:bg-green-700 focus:ring-green-500 focus:ring-offset-green-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg",
  detailBox: "flex gap-x-4 justify-between",
};
const CartSummary = () => {
  const { cart, setCartData, resetCart } = useCart();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const handlePlaceOrder = async (e: any) => {
    if (cart.userId !== "") {
      setIsLoading(true);

      await supabase
        .from("orders")
        .insert([
          {
            number_of_items: cart?.numberOfItems,
            total_amount: cart?.totalAmount,
            shipping_charges: cart?.shippingCharges,
            discount: cart?.discount,
            last_change_in_status_at: Date.now().toString(),
            status: "CREATED",
            order_items: cart?.cartItems,
            user_id: cart?.userId,
          },
        ])
        .then(({ data, error }) => {
          if (!error) {
            console.log(data);
            resetCart();
          } else {
            console.log(error);
          }
          setIsLoading(false);
        });
    }
  };
  return (
    <div className={styles.container}>
      <div>
        <button
          onClick={() => {
            router.push("../menu");
          }}
          className={styles.pinkButton}
        >
          ADD MORE ITEMS
        </button>
      </div>
      <div>
        <div className={styles.detailBox}>
          <p className="font-sans text-base font-medium">Items Total</p>
          <p className="font-sans text-base font-medium">
            {cart.totalAmount} RS.
          </p>
        </div>
        <div>
          <div className={styles.detailBox}>
            <p className="font-sans text-xs font-normal">Delivery Charge</p>
            <p className="font-sans text-xs font-normal"> 30 RS.</p>
          </div>
          <div className={styles.detailBox}>
            <p className="font-sans text-xs font-normal">
              Govt. taxes and resturant charges
            </p>
            <p className="font-sans text-xs font-normal">45 RS.</p>
          </div>
        </div>
      </div>
      <div className={`${styles.detailBox} mt-20`}>
        <p className="font-sans text-xl font-bold">GRAND TOTAL</p>
        <p className="font-sans text-xl font-bold">
          {cart.totalAmount + 75} RS.
        </p>
      </div>
      <div>
        <button onClick={handlePlaceOrder} className={styles.greenButton}>
          {isLoading ? "LOADING..." : "PLACE ORDER"}
        </button>
      </div>
    </div>
  );
};

export default CartSummary;
