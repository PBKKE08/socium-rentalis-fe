import TabLink from "./TabLink";

type UsersTabProps = {
  name: string;
};

export default function UsersTab({ name }: UsersTabProps) {
  return (
    <nav className="flex container mx-auto">
      <ul className="flex items-center gap-4 w-full px-4">
        <TabLink
          name="Users"
          isActive={name === "users" && true}
          href="/admin/users"
        />
        <TabLink
          name="Partners"
          isActive={name === "partners" && true}
          href="/admin/users/partners"
        />
      </ul>
    </nav>
  );
}
