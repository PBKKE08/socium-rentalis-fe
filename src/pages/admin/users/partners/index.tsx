import AdminNavbar from "@/components/organism/Admin/Navbar";
import UsersCard from "@/components/organism/Admin/UsersCard";
import UsersTab from "@/components/organism/Admin/UsersTab";
import Head from "next/head";
import Footer from "@/components/organism/Footer";
import Table from "@/components/organism/Admin/Table";
import Button from "@/components/atoms/Button";

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

const columns = [
  { title: "ID", key: "id" },
  { title: "Name", key: "name" },
  { title: "Gender", key: "gender" },
  {
    title: "Status",
    key: "isPartner",
  },
  { title: "Price", key: "price" },
  { title: "Rating", key: "rating" },
  { title: "Description", key: "description" },
  {
    title: "Actions",
    key: "actions",
    render: (data: PartnerCard) => (
      <Button isPrimary href="#step" className="lg:max-w-fit">
        Delete
      </Button>
    ),
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
        <div className="container mx-auto px-6 py-8">
          <Table columns={columns} data={usersData} />
        </div>
        <div className="bg-primary-400 mt-10">
          <Footer className="pt-20 pb-20 px-4 container mx-auto" />
        </div>
      </main>
    </>
  );
}
