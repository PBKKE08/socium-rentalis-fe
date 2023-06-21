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
