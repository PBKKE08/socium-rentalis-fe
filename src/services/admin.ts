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

export async function getAllTransactionAdmin() {
  // booker_name: "Sampurasun";
  // booking_date: "2023-06-23";
  // partner_email: "partner8@example.com";
  // partner_id: "42e68281-d8a0-4a39-968b-11e3ac3f99cd";
  // partner_name: "Partner 8";
  // payment_type: "Mandiri";
  // price: "150000";
  // time_end: "14:53:00";
  // time_start: "09:53:00";
  // transaction_id: "051adde5-5270-4b21-9d95-3990861697d1";
  const transaction = await callAPI({
    url: `${URL}/admin/tx`,
    method: "GET",
    // tokenAdmin: true,
  });

  return transaction;
}
