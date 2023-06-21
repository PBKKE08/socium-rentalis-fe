import callAPI from "./api";
const URL = process.env.NEXT_PUBLIC_PROD_URL;

export async function getPartners(query?: QueryFilter) {
  //   query param
  // city: Bandung, Jakarta, Surabaya, Malang, Jogjakarta (ini case sensitive)
  // gender: f, m
  // category: Prom, Wedding, Default, Party
  const city = query?.area !== "all" ? query?.area : "";
  const gender = query?.gender !== "all" ? query?.gender : "";
  const category = query?.category !== "all" ? query?.category : "";
  // console.log({ city, gender, category });
  const partners = await callAPI({
    url: query
      ? `${URL}/pengguna/cari-pasangan?city=${city}&gender=${gender}&category=${category}`
      : `${URL}/pengguna/cari-pasangan`,
    method: "GET",
  });

  return partners;
}

export async function getPublicData(isCity: boolean, isCategory: boolean) {
  // ke / public / cc;
  const data: any = await callAPI({
    url: `${URL}/public/cc`,
    method: "GET",
  });

  if (isCity && data.error === 0 && !isCategory) {
    const cities = { ...data, data: data.data.cities };
    return cities;
  } else if (isCategory && data.error === 0 && !isCity) {
    const categories = { ...data, data: data.data.categories };
    return categories;
  }

  return data;
}

export async function getPartnerById(id: string) {
  console.log(id);
  const partner = await callAPI({
    url: `${URL}/partner/${id}`,
    method: "GET",
  });

  return partner;
}

export async function postTransaction(data: any) {
  //   {
  //     "partner_id": "1e4ed79a-7c9e-4c7b-9b9f-9d86cc6c7c2d",
  //     "booking_date": "2023-10-22",
  //     "time_start": "08:00",
  //     "time_end": "15:00",
  //     "payment_type": "BCA",
  //     "message": "Saya ganteng"
  // }

  const transaction = await callAPI({
    url: `${URL}/booking/book`,
    method: "POST",
    data,
    token: true,
  });
  console.log({ transaction });
  return transaction;
}

export async function getTransaction(token: string) {
  const transaction = await callAPI({
    url: `${URL}/penggunapriv/history-transaksi
`,
    method: "GET",
    serverToken: token,
  });

  return transaction;
}

export async function getTransactionById(id: string) {
  //   {
  //     "code": 200,
  //     "data": {
  //         "order_id": "2b5cbd84-3e04-4b31-bec0-3f31d299fd4a",
  //         "partner_name": "Partner 8",
  //         "partner_id": "42e68281-d8a0-4a39-968b-11e3ac3f99cd",
  //         "category": "Default",
  //         "booking_date": "2023-06-23",
  //         "start": "14:00:00",
  //         "end": "19:00:00",
  //         "order_status": "3",
  //         "price": "150000",
  //         "payment_type": "Mandiri",
  //         "is_paid": false
  //     },
  //     "msg": "OK"
  // }
  const transaction = await callAPI({
    url: `${URL}/penggunapriv/history-transaksi/${id}`,
    method: "GET",
    token: true,
  });

  return transaction;
}

export async function postReview(data: any) {
  //   {
  //     "partner_id": "1e4ed79a-7c9e-4c7b-9b9f-9d86cc6c7c2d",
  //     "rating": 5,
  //     "comment": "Saya ganteng"
  // }

  const review = await callAPI({
    url: `${URL}/penggunapriv/review`,
    method: "POST",
    data,
    token: true,
  });
  // console.log({ review });
  return review;
}
