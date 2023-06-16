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
      // headers: {
      //   Authorization: `Bearer ${token}`,
      // },
    });

    const result = {
      error: 0,
      status: "success",
      data: response.data,
    };
  } catch (error: any) {
    return {
      error: 1,
      message: error.response.data.message,
      data: null,
    };
  }
}
