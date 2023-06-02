import { useEffect, useState } from "react";
import TabLink from "./TabLink";

type TabTransactionProps = {
  name: string;
};

export default function TabTransaction({ name }: TabTransactionProps) {
  return (
    <nav className="flex container mx-auto">
      <ul className="flex items-center gap-4 w-full px-4">
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
