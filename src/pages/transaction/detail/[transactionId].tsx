import BookingItemDetail from "@/components/organism/BookingPayment/BookingItemDetail";
import BookingItemNominal from "@/components/organism/BookingPayment/BookingItemNominal";
import DetailProfile from "@/components/organism/Transaction/Detail/DetailProfile";
import MainLayoutTransaction from "@/components/organism/Transaction/MainLayoutTransaction";
import { getTokenFromCookiesAndDecodeForServer } from "@/services/token";

export default function DetailTransaction() {
  return (
    <MainLayoutTransaction>
      <div className="pb-8 px-4 lg:px-0 container mx-auto">
        <h1 className="section-heading text-center mb-4">
          Booking Information
        </h1>
        <h1 className="text-2xl text-font-primary-400 font-medium text-center mb-10">
          Order K-230220012233
        </h1>

        <div className="flex flex-col w-full justify-center items-center gap-8">
          <DetailProfile />
          <div className="flex flex-col gap-3 w-full md:w-3/4 lg:w-1/2 mb-10">
            <BookingItemDetail title="Kategori Booking" value="Kondangan" />
            <BookingItemDetail
              title="Tanggal Booking"
              value="17 Januari 2024"
            />
            <BookingItemDetail title="Jam Mulai" value="06:00 AM" />
            <BookingItemDetail title="Jam Selesai" value="17:00 PM" />
            <BookingItemDetail title="Durasi" value="11 Jam" />
          </div>
          <h1 className="text-heading font-medium text-3xl mb-12">
            Payment Details
          </h1>
          <div className="flex flex-col gap-3 w-full md:w-3/4 lg:w-1/2 mb-10">
            <BookingItemNominal title="Biaya Jasa" value={1000000} />
            <BookingItemNominal title="Biaya Transportasi" value={100000} />
            <BookingItemNominal title="Biaya Pajak (20%)" value={220000} />
            <BookingItemNominal title="Total Biaya" value={1320000} />
          </div>
        </div>
      </div>
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
