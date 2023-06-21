import axios, { AxiosRequestConfig } from "axios";

interface callAPIProps extends AxiosRequestConfig {
  token?: string;
}

export default async function callAPI({
  url,
  method,
  data,
  token,
}: callAPIProps) {
  try {
    const headers = {
      "ngrok-skip-browser-warning": "69420",
      Authorization: token ? `Bearer ${token}` : "",
    };

    const response = await axios({
      url,
      method,
      data,
      headers,
    });

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
