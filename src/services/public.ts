import callAPI from "./api";
const URL = process.env.NEXT_PUBLIC_PROD_URL;

export async function getAllCitiesAndCategories() {
    const citiesAndCategories = await callAPI({
      url: `${URL}/public/cc`,
      method: "GET",
      // tokenAdmin: true,
    });
  
    return citiesAndCategories;
}