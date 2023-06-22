import AdminNavbar from "@/components/organism/Admin/Navbar";
import CategoryCard from "@/components/organism/Admin/CategoryCard";
import Head from "next/head";

const categoryData : CategoryCard[] = [
    {
        id: 1,
        nama: "Kondangan"
    },
    {
        id: 2,
        nama: "Nonton"
    },
    {
        id: 3,
        nama: "Makan"
    },
    {
        id: 4,
        nama: "Kencan"
    },
]

export default function AdminCategories() {
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
          <div className="flex flex-wrap gap-4 items-start justify-start">
            {categoryData.map(
              (category) => <CategoryCard category={category} />
            )}
          </div>
        </div>
      </main>
    </>
  );
}
