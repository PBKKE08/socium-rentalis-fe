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
    const headers = {};
    const response = await axios({
      url,
      method,
      data,
      headers: {
        // Authorization: `Bearer ${token}`,
        "ngrok-skip-browser-warning": "69420",
      },
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
      message: error.message,
      data: null,
    };
  }
}
