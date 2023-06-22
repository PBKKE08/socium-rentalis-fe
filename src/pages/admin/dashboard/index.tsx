import DashboardCard from "@/components/organism/Admin/DashboardCard";
import AdminNavbar from "@/components/organism/Admin/Navbar";
import Footer from "@/components/organism/Footer";
import Head from "next/head";

const DashboardData = [
  {
    title: "Users",
    number: 305,
    href: "/admin/users"
  },
  {
    title: "Partners",
    number: 150,
    href: "/admin/users/partners"
  },
  {
    title: "Categories",
    number: 50,
    href: "/admin/categories"
  },
  {
    title: "Transactions",
    number: 50,
    href: "/admin/transactions"
  },
];

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
        <div className="container mt-8 p-4 mx-auto">
          <h1 className="section-heading text-center mb-10">Dashboard</h1>
          <div className="flex flex-wrap justify-center items-center gap-4">
            {DashboardData.map((data) => (
              <DashboardCard
                href={data.href}
                title={data.title}
                number={data.number}
                key={data.title}
                text={data.title}
              />
            ))}
          </div>
        </div>
        <div className="bg-primary-400 mt-10">
          <Footer className="pt-20 pb-20 px-4 container mx-auto" />
        </div>
      </main>
    </>
  );
}
