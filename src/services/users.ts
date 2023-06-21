import callAPI from "./api";
const URL = process.env.NEXT_PUBLIC_PROD_URL;

export async function getPartners(query: QueryFilter) {
  //   query param
  // city: Bandung, Jakarta, Surabaya, Malang, Jogjakarta (ini case sensitive)
  // gender: f, m
  // category: Prom, Wedding, Default, Party
  const partners = await callAPI({
    url: `${URL}/pengguna/cari-pasangan`,
    method: "GET",
  });

  return partners;
}
