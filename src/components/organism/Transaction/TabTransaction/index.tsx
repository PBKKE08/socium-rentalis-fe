import { useEffect, useState } from "react";
import TabLink from "./TabLink";

type TabTransactionProps = {
  name: string;
};

export default function TabTransaction({ name }: TabTransactionProps) {
  return (
    <nav className="p-4 md:flex md:flex-row md:justify-between md:items-center sm:container mx-auto border-b border-b-primary-100 gap-5 md:gap-0">
      <ul className="flex flex-col md:flex-row items-center gap-1 md:gap-4 justify-center z-[-1] md:z-auto md:static absolute bg-white w-full left-0 md:w-auto px-4 md:px-0 md:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-300 pb-4 md:pb-0">
        <TabLink
          name="History"
          isActive={name === "history" && true}
          href="/transaction"
        />
        <TabLink
          name="Upcoming"
          isActive={name === "upcoming" && true}
          href="/transaction/upcoming"
        />
      </ul>
    </nav>
  );
}
