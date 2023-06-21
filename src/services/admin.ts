import callAPI from "./api";
const URL = process.env.NEXT_PUBLIC_PROD_URL;

export async function getPartnerList() {
  const partners = await callAPI({
    url: `${URL}/admin/pendaftar`,
    method: "GET",
    // tokenAdmin: true,
  });

  return partners;
}
