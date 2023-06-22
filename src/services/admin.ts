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

export async function accPartner(id: string, email: string) {
  const partners = await callAPI({
    url: `${URL}/admin/terima?id=${id}&email=${email}`,
    method: "PATCH",
    // tokenAdmin: true,
  });

  return partners;
}

export async function rejectPartner(id: string, email: string) {
  const partners = await callAPI({
    url: `${URL}/admin/tolak?id=${id}&email=${email}`,
    method: "PATCH",
    // tokenAdmin: true,
  });

  return partners;
}
