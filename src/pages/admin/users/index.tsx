import AdminNavbar from "@/components/organism/Admin/Navbar";
import UsersCard from "@/components/organism/Admin/UsersCard";
import UsersTab from "@/components/organism/Admin/UsersTab";
import Footer from "@/components/organism/Footer";

import Table from "@/components/organism/Admin/Table";
import Button from "@/components/atoms/Button";
import Head from "next/head";

const usersData: PartnerCard[] = [
  {
    id: 1,
    name: "John Doe",
    gender: "male",
  },
  {
    id: 2,
    name: "Andrea",
    gender: "female",
    isPartner: "pending",
    price: 100000,
    rating: 4.5,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
  },
  {
    id: 3,
    name: "Lamena",
    gender: "female",
    isPartner: "accepted",
    price: 100000,
    rating: 4.5,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
  },
  {
    id: 4,
    name: "Melati",
    gender: "female",
    isPartner: "rejected",
    price: 100000,
    rating: 4.5,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
  },
];

import { getPartnerList } from "@/services/admin";
import Head from "next/head";
import { useCallback, useEffect, useState } from "react";


const columns = [
  { title: "ID", key: "id" },
  { title: "Name", key: "name" },
  { title: "Gender", key: "gender" },
  { title: "Status", key: "isPartner" },
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

export default function AdminUsers() {
  const [usersData, setUsersData] = useState<any>([]); // [1
  const getAllData = useCallback(async () => {
    const result = await getPartnerList();
    setUsersData(result.data);
    console.log(result.data);
  }, [getPartnerList, usersData]);
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
        <AdminNavbar name="users" />
        <div className="container mx-auto px-6 py-8">
          <UsersTab name="users" />
        </div>
        <div className="container mx-auto px-6 py-8">
          <div className="flex flex-wrap gap-8 items-center justify-center">
            {usersData?.map((user: any) => (
              <UsersCard partner={user} key={user.partner_id} />
            ))}
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
