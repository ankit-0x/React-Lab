import RestHeader from "./RestHeader";
import { Outlet } from "react-router";

export default function SecondaryHome() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      
      {/* Header */}
      <RestHeader />

      {/* Main Content */}
      <main className="flex-1 w-[90%] md:w-[80%] mx-auto py-8">
        <Outlet />
      </main>

    </div>
  );
}