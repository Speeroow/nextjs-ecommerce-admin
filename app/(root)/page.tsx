import { UserButton } from "@clerk/nextjs";

const SetupPage = () => {
  return (
    <main className="p-4 flex flex-row gap-4">
      <UserButton afterSignOutUrl="/" />
      <h1>Admin Panel Dashboard</h1>
    </main>
  );
};

export default SetupPage;
