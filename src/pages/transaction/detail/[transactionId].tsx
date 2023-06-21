import Button from "@/components/atoms/Button";
import Input from "@/components/atoms/Input";
import Loading from "@/components/atoms/Loading";
import TextareaForm from "@/components/organism/BookingForm/TextareaForm";
import BookingItemDetail from "@/components/organism/BookingPayment/BookingItemDetail";
import BookingItemNominal from "@/components/organism/BookingPayment/BookingItemNominal";
import DetailProfile from "@/components/organism/Transaction/Detail/DetailProfile";
import MainLayoutTransaction from "@/components/organism/Transaction/MainLayoutTransaction";
import { getDurationInHours } from "@/lib/validation";
import { getTokenFromCookiesAndDecodeForServer } from "@/services/token";
import { getTransactionById, postReview } from "@/services/users";
import { useRouter } from "next/router";
import { useState, useEffect, useCallback } from "react";

export default function DetailTransaction() {
  const [data, setData] = useState({} as any);
  const [isLoading, setIsLoading] = useState(false);
  const { query, isReady, push } = useRouter();
  const [rating, setRating] = useState(1);
  const [textReview, setTextReview] = useState("");
  const getDetail = useCallback(async () => {
    const { transactionId } = query;
    const result = await getTransactionById(transactionId as string);
    setData(result.data);

    if (!result.data) return push("/404");
    setIsLoading(false);
  }, [query, isReady, getTransactionById]);

  useEffect(() => {
    if (!isReady || !query) setIsLoading(true);
    else {
      setIsLoading(false);
      getDetail();
    }
  }, [isReady, query, getDetail]);

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // console.log({ rating, textReview });
    if (rating < 1 || rating > 5) return alert("Rating harus diantara 1-5");
    else if (textReview.length < 1) return alert("Review tidak boleh kosong");
    else if (textReview.length > 255)
      return alert("Review tidak boleh lebih dari 255 karakter");
    else {
      const sendData = {
        rating,
        comment: textReview,
        partner_id: data.partner_id,
      };
      // console.log({ sendData, data });
      const result: any = await postReview(sendData);
      if (result.error) return alert(result.message);
      else alert("Review berhasil dikirim");
    }
  };

  return (
    <MainLayoutTransaction>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="pb-8 px-4 lg:px-0 container mx-auto">
          <h1 className="section-heading text-center mb-4">
            Booking Information
          </h1>
          <h1 className="text-2xl text-font-primary-400 font-medium text-center mb-10">
            {data.order_id}
          </h1>

          <div className="flex flex-col w-full justify-center items-center gap-8">
            <DetailProfile
              name={data.partner_name}
              price={data.price}
              category={data.category}
              isPaid={data.is_paid}
              status={data.order_status}
            />
            <div className="flex flex-col gap-3 w-full md:w-3/4 lg:w-1/2 mb-10">
              <BookingItemDetail
                title="Kategori Booking"
                value={data.category}
              />
              <BookingItemDetail
                title="Tanggal Booking"
                value={data.booking_date}
              />
              <BookingItemDetail title="Jam Mulai" value={data.start} />
              <BookingItemDetail title="Jam Selesai" value={data.end} />
              <BookingItemDetail
                title="Durasi"
                value={getDurationInHours(data.start, data.end)}
              />
            </div>
            <h1 className="text-heading font-medium text-3xl mb-12">
              Payment Details
            </h1>
            <div className="flex flex-col gap-3 w-full md:w-3/4 lg:w-1/2 mb-10">
              <BookingItemDetail title="Bank" value={data.payment_type} />
              <BookingItemNominal title="Biaya Jasa" value={data.price} />
              {/* <BookingItemNominal title="Biaya Transportasi" value={100000} />
              <BookingItemNominal title="Biaya Pajak (20%)" value={220000} /> */}
              <BookingItemNominal
                title="Total Biaya"
                value={
                  data.price *
                  (getDurationInHours(data.start, data.end) as number)
                }
              />
            </div>

            <h1 className="text-heading font-medium text-3xl mb-8">Review</h1>
            <div className="flex flex-col gap-3 w-full md:w-3/4 lg:w-1/2 mb-10">
              <form className="relative" onSubmit={submitHandler}>
                <div className="flex items-center gap-4 w-full mb-6 flex-wrap md:flex-nowrap">
                  <div className="w-full">
                    <Input
                      id="rating"
                      type="number"
                      min="1"
                      max="5"
                      isLabel
                      labelName="Rating Score"
                      value={rating}
                      onChange={(e) => setRating(Number(e.target.value))}
                    />
                  </div>
                </div>
                <TextareaForm
                  value={textReview}
                  onChange={(e) => setTextReview(e.target.value)}
                />

                <Button isPrimary type="submit" className="mt-10">
                  Rate
                </Button>
              </form>
            </div>
          </div>
        </div>
      )}
    </MainLayoutTransaction>
  );
}

export async function getServerSideProps({ req }: { req: any }) {
  const { token } = req.cookies;
  const payload = getTokenFromCookiesAndDecodeForServer(token);

  if (!token || !payload) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}
