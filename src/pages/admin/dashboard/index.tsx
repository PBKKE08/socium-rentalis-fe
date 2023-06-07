import AdminNavbar from "@/components/organism/Admin/Navbar";
import Head from "next/head";

export default function AdminDashboard() {
  return (
    <>
      <Head>
        <title>Socium Rentalis | Admin</title>
        <meta name="description" content="Socium Rentalis" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <AdminNavbar name="dashboard" />
      </main>
    </>
  );
}
