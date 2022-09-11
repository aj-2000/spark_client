import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import OrderItem from "@/components/OrderItem";
import { useAuth } from "context/AuthContext";
import React, { useEffect, useState, useMemo } from "react";
import supabase from "utils/supabase";
import PaginationTwo from "@/components/PaginationTwo";

let PageSize = 3;

const styles = {
  container: "",
  mainHeading: "font-mono text-2xl subpixel-antialiased font-light mt-16",
  contentContainer: "container flex mx-auto px-4 pt-36",
  hr: "mt-4",
  cartItems: "grow-[3]",
  cartItemsHead: "flex justify-between",
  cartItemsHeading: "flex",
  orderSummary: "grow",
  itemsList: "mt-4 flex flex-col gap-4",
};

const Orders = () => {
  const [orders, setOrders] = useState<any>([]);
  const { user } = useAuth();
  const [currentPage, setCurrentPage] = useState(1);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return orders.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);
  const fetchOrders = async () => {
    await supabase
      .from("orders")
      .select()
      .order("created_at", { ascending: false })
      .match({ user_id: user.id })
      .then(({ data, error }) => {
        if (!error) {
          setOrders(data);
        } else {
          console.log(error);
        }
      });
  };
  useEffect(() => {
    fetchOrders();
  }, [user.id]);
  return (
    <div className={styles.container}>
      <Navbar />
      <div className="container mx-auto px-4 sm:px-8 max-w-5xl">
        <div className="py-8">
          <div className="flex flex-row mb-1 sm:mb-0 justify-between w-full">
            <h2 className="text-2xl leading-tight">My Orders</h2>
          </div>
          <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
              <table className="min-w-full leading-normal">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                    >
                      Order ID
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                    >
                      Description
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                    >
                      Placed at
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                    >
                      Status
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                    ></th>
                  </tr>
                </thead>
                <tbody>
                  {currentTableData.map((order: any) => {
                    const orderData = {
                      id: order.id,
                      createdAt: order.created_at,
                      lastChangeInStatusAt: order.last_change_in_status_at,
                      numberOfItems: order.number_of_items,
                      orderItems: order.order_items,
                      shippingCharges: order.shipping_charges,
                      status: order.status,
                      totalAmount: order.total_amount,
                      userId: order.user_id,
                      discount: order.discount,
                    };
                    return <OrderItem key={order.id} {...orderData} />;
                  })}
                </tbody>
              </table>
              <PaginationTwo
                currentPage={currentPage}
                totalCount={orders.length}
                pageSize={PageSize}
                onPageChange={(page: any) => setCurrentPage(page)}
              />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Orders;
