import callAPI from "./api";
const URL = process.env.NEXT_PUBLIC_PROD_URL;

export async function postSignUp(data: any) {
  const url = `${URL}/auth/register`;
  return callAPI({
    url,
    method: "POST",
    data,
  });
}
export async function postLogin(data: any) {
  const url = `${URL}/auth/login`;
  return callAPI({
    url,
    method: "POST",
    data,
  });
}
