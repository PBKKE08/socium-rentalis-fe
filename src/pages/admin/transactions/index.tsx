import Button from "@/components/atoms/Button";
import AdminNavbar from "@/components/organism/Admin/Navbar";
import { getDurationInHours } from "@/lib/validation";
import { accTransaction, getAllTransactionAdmin } from "@/services/admin";
import Head from "next/head";
import { useCallback, useEffect, useState } from "react";
import { NumericFormat } from "react-number-format";

export default function AdminTransactions() {
  const [transactions, setTransactions] = useState<any[]>([]);
  const getTransactions = useCallback(async () => {
    const result = await getAllTransactionAdmin();
    setTransactions(result.data);
  }, [getAllTransactionAdmin]);

  useEffect(() => {
    getTransactions();
  }, []);

  const acceptHandler = async (
    booker_name: any,
    partner_id: any,
    partner_email: any,
    partner_name: any,
    booking_date: any,
    time_start: any,
    time_end: any,
    transaction_id: any,
    price: any,
    payment_type: any
  ) => {
    const data = {
      booker_name: booker_name,
      partner_id: partner_id,
      partner_email: partner_email,
      partner_name: partner_name,
      booking_date: booking_date,
      time_start: time_start,
      time_end: time_end,
      transaction_id: transaction_id,
      price: price,
      payment_type: payment_type,
    };

    const result: any = await accTransaction(data);

    if (result.error) return alert(result.message);
    else {
      alert("Transaction accepted");
      window.location.reload();
    }
  };

  return (
    <>
      <Head>
        <title>Socium Rentalis | Users</title>
        <meta name="description" content="Socium Rentalis" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <AdminNavbar name="transactions" />
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-wrap gap-8 items-center justify-center">
            {transactions ? (
              transactions?.map((item) => (
                <div
                  className="flex flex-col gap-6 items-center justify-center border p-4 rounded-lg"
                  key={item.transaction_id}
                >
                  <div
                    className="flex flex-col gap-1 w-full"
                    key={item.transaction_id}
                  >
                    <p className="text-lg text-font-primary-500 font-medium">
                      {item.booking_date}
                    </p>
                    <p className="text-lg text-font-primary-500 font-medium">
                      {item.booker_name}
                    </p>
                    <p className="text-lg text-font-primary-500 font-medium">
                      {item.partner_name}
                    </p>
                    <p className="text-lg text-font-primary-500 font-medium">
                      {item.time_start} - {item.time_end},{" "}
                      {getDurationInHours(item.time_start, item.time_end)} jam
                    </p>
                    <p className="text-heading text-lg font-semibold">
                      <NumericFormat
                        value={item.price}
                        displayType="text"
                        prefix="IDR "
                        suffix="/jam"
                        decimalSeparator=","
                        thousandSeparator="."
                      />
                    </p>
                    <p className="text-font-primary-400">{item.payment_type}</p>

                    <p className="text-font-primary-400">
                      Total :{" "}
                      <NumericFormat
                        value={
                          Number(
                            getDurationInHours(item.time_start, item.time_end)
                          ) * item.price
                        }
                        displayType="text"
                        prefix="IDR "
                        suffix=""
                        decimalSeparator=","
                        thousandSeparator="."
                      />
                    </p>

                    <p className="text-font-primary-400">
                      {item.partner_email}
                    </p>

                    <div className="flex flex-col justify-center items-center mt-4">
                      <Button
                        isCustom
                        customClass="bg-green-500 mb-3 text-white hover:bg-green-300 focus:ring-green-200"
                        onClick={() =>
                          acceptHandler(
                            item.booker_name,
                            item.partner_id,
                            item.partner_email,
                            item.partner_name,
                            item.booking_date,
                            item.time_start,
                            item.time_end,
                            item.transaction_id,
                            item.price,
                            item.payment_type
                          )
                        }
                      >
                        Accept
                      </Button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center">No data</p>
            )}
          </div>
        </div>
      </main>
    </>
  );
}
