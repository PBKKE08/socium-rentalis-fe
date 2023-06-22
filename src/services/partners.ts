import callAPI from "./api";
const URL = process.env.NEXT_PUBLIC_PROD_URL;

export async function partnerSignUp(data: any) {
  //   {
  //     "name": "Scaloni",
  //     "email": "scaloni@gmail.com",
  //     "password": "test123",
  //     "telephone": "082219075060",
  //     "gender": "f",
  //     "category_id": "4f150d84-2b5d-4cb6-82f1-73491df2407b",
  //     "price": "100000",
  //     "city_id": "28b7b4c2-9f68-47e0-bd79-8a363fd98f13",
  //     "description": "aing sudah dewasa"
  // }

  const url = `${URL}/auth/register_partner`;
  return callAPI({
    url,
    method: "POST",
    data,
  });
}

export async function partnerLogin(data: any) {
  const url = `${URL}/auth/login_partner`;
  return callAPI({
    url,
    method: "POST",
    data,
  });
}
