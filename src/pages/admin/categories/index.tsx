import AdminNavbar from "@/components/organism/Admin/Navbar";
import CategoryCard from "@/components/organism/Admin/CategoryCard";
import Head from "next/head";
import { getAllCitiesAndCategories } from "@/services/public";
import { useCallback, useEffect, useState } from "react";


const mockData : ccResponse = {
  categories: [
    {
        id: 1,
        name: "Kondangan"
    },
    {
        id: 2,
        name: "Nonton"
    },
    {
        id: 3,
        name: "Makan"
    },
    {
        id: 4,
        name: "Kencan"
    },
  ],
  cities: [
    {
        id: 1,
        name: "Magelang"
    },
    {
        id: 2,
        name: "Bandung"
    },
    {
        id: 3,
        name: "Surabaya"
    },
    {
        id: 4,
        name: "Jakarta"
    },
  ],
}

export default function AdminCategories() {
  const [CCData, setCCData] = useState<any>([]); // [1
  
  const getAllData = useCallback(async () => {
    const result = await getAllCitiesAndCategories();
    setCCData(result.data);
    console.log(result.data);
  }, [getAllCitiesAndCategories, CCData]);
  
  useEffect(() => {
    getAllData();
  }, []);

  return (
    <>
      <Head>
        <title>Socium Rentalis | Users</title>
        <meta name="description" content="Socium Rentalis" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <AdminNavbar name="categories" />
        <div className="container mx-auto px-6 py-8">
          <div>
            <h2>Categories</h2>
            <div className="flex flex-wrap gap-4 items-start justify-start">
              {mockData.categories.map(
                (category: any) => <CategoryCard category={category} />
              )}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
