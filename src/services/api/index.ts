import axios, { AxiosRequestConfig } from "axios";
import { getTokenFromCookies } from "../token";

interface callAPIProps extends AxiosRequestConfig {
  token?: boolean;
  serverToken?: string;
}

export default async function callAPI({
  url,
  method,
  data,
  token,
  serverToken,
}: callAPIProps) {
  try {
    console.log({ token });

    let headers = {};
    if (serverToken) {
      headers = {
        "ngrok-skip-browser-warning": "69420",
        Authorization: `Bearer ${serverToken}`,
      };
    } else if (token) {
      const JWTToken = getTokenFromCookies();
      if (!JWTToken) throw new Error("Token not found");
      headers = {
        "ngrok-skip-browser-warning": "69420",
        Authorization: `Bearer ${JWTToken}`,
      };
    } else headers = { "ngrok-skip-browser-warning": "69420" };

    console.log({ headers });

    const response = await axios({
      url,
      method,
      data,
      headers,
    });
    console.log({ response });
    const result = {
      error: 0,
      code: "success",
      data: response.data.data,
    };

    return result;
  } catch (error: any) {
    return {
      error: 1,
      fullError: error,
      message: error.message,
      data: null,
    };
  }
}
