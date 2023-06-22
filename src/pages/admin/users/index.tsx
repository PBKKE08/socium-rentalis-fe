<<<<<<< HEAD
import BestPartners from "@/components/organism/BestPartners";
import Categories from "@/components/organism/Categories";
import Footer from "@/components/organism/Footer";
import Hero from "@/components/organism/Hero";
import Navbar from "@/components/organism/Navbar";
import UserList from "@/components/organism/UserList";
import Step from "@/components/organism/Step";
import Head from "next/head";

export default function Users() {
  return (
    <>
      <Head>
        <title>Socium Rentalis</title>
=======
import AdminNavbar from "@/components/organism/Admin/Navbar";
import UsersCard from "@/components/organism/Admin/UsersCard";
import UsersTab from "@/components/organism/Admin/UsersTab";
import Footer from "@/components/organism/Footer";
import { getPartnerList } from "@/services/admin";
import Head from "next/head";
import { useCallback, useEffect, useState } from "react";

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
>>>>>>> f6d79a64548371c075cf512c1fc712c4d493f92d
        <meta name="description" content="Socium Rentalis" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
<<<<<<< HEAD
        <Navbar name="partners" />
        <UserList></UserList>
=======
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
        <div className="bg-primary-400 mt-10">
          <Footer className="pt-20 pb-20 px-4 container mx-auto" />
        </div>
>>>>>>> f6d79a64548371c075cf512c1fc712c4d493f92d
      </main>
    </>
  );
}
