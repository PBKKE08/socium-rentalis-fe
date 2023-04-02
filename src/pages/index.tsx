import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Socium Rentalis</title>
        <meta name="description" content="Socium Rentalis" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="flex items-center justify-center h-[100vh]">
        <h1 className="text-6xl font-bold text-red-600">SOCIUM RENTALIS</h1>
      </main>
    </>
  );
}
