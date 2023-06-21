import Image from "next/image";
import InfoDetail from "./InfoDetail";
import BookingForm from "../BookingForm";
import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/router";
import Loading from "@/components/atoms/Loading";
import { getPartnerById } from "@/services/users";

type PartnerDetailProps = {
  className?: string;
};

export default function PartnerDetail({ className }: PartnerDetailProps) {
  const [data, setData] = useState({
    id: "",
    name: "",
    city: "",
    price: "",
    email: "",
    category: "",
    rating: 0,
    description: "",
    gender: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const { query, isReady, push } = useRouter();

  const getDetail = useCallback(async () => {
    const { partnerId } = query;
    const result = await getPartnerById(partnerId as string);
    setData(result.data);
    // console.log(result.data);
    localStorage.setItem("partnerData", result.data);
    if (!result.data) return push("/404");
    setIsLoading(false);
  }, [query, isReady, getPartnerById]);

  useEffect(() => {
    if (!isReady || !query) setIsLoading(true);
    else {
      setIsLoading(false);
      getDetail();
    }
  }, [isReady, query, getDetail]);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className={className}>
          <div className="flex flex-col md:flex-row justify-center gap-6">
            <Image
              src={`https://source.unsplash.com/random/?${
                data.gender === "f" ? "female" : "male"
              }`}
              width={500}
              height={500}
              alt="partner-img"
              className="object-cover object-center rounded-xl shadow-md max-w-xs max-h-96"
              quality={100}
              loading="lazy"
            />
            <div className="flex flex-col w-full">
              <InfoDetail partner={data} />
              <BookingForm />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
