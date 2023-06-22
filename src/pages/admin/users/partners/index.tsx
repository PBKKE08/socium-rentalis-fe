import AdminNavbar from "@/components/organism/Admin/Navbar";
import UsersCard from "@/components/organism/Admin/UsersCard";
import UsersTab from "@/components/organism/Admin/UsersTab";
import Head from "next/head";

const usersData: PartnerCard[] = [
  {
    id: 1,
    nama: "John Doe",
    gender: "m",
  },
  {
    id: 2,
    nama: "Andrea",
    gender: "f",
    isPartner: "pending",
    harga: 100000,
    kategori: "wedding",
    rating: 4.5,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
  },
  {
    id: 3,
    nama: "Lamena",
    gender: "f",
    isPartner: "accepted",
    harga: 100000,
    kategori: "wedding",
    rating: 4.5,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
  },
  {
    id: 4,
    nama: "Melati",
    gender: "f",
    isPartner: "rejected",
    harga: 100000,
    kategori: "wedding",
    rating: 4.5,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
  },
];

export default function AdminPartners() {
  return (
    <>
      <Head>
        <title>Socium Rentalis | Users</title>
        <meta name="description" content="Socium Rentalis" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <AdminNavbar name="users" />
        <div className="container mx-auto px-6 py-8">
          <UsersTab name="partners" />
        </div>
        <div className="container mx-auto px-6 py-8">
          <div className="flex flex-wrap gap-4 items-start justify-start">
            {usersData.map(
              (user) => user.isPartner && <UsersCard partner={user} />
            )}
          </div>
        </div>
      </main>
    </>
  );
}
