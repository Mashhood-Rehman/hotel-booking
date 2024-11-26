"use client";
import AdminLayout from "@/app/Components/AdminLayout";
import { useEffect, useState } from "react";

const Page = () => {
  const [Page, setPage] = useState([]);

  useEffect(() => {
    // Fetch Page from the database (placeholder API call)
    fetch("/api/Page")
      .then((res) => res.json())
      .then((data) => setPage(data));
  }, []);

  const deleteHotel = (id) => {
    // Placeholder for DELETE request
    fetch(`/api/Page/${id}`, { method: "DELETE" }).then(() =>
      setPage(Page.filter((hotel) => hotel.id !== id))
    );
  };

  return (
    <AdminLayout>
      <h1 className="text-2xl font-bold">Hotel Management</h1>
      <p className="text-gray-600 mb-4">Manage all Hotels from here.</p>
      {/* Add table or hotel-related components here */}

      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Hotels</h1>
        <a
          href="/Dashboard/Admin/Hotels/Add"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Add Hotel
        </a>
      </div>
      <table className="w-full bg-white shadow rounded">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-4 text-left">ID</th>
            <th className="p-4 text-left">Name</th>
            <th className="p-4 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {Page.map((hotel) => (
            <tr key={hotel.id} className="border-b">
              <td className="p-4">{hotel.id}</td>
              <td className="p-4">{hotel.name}</td>
              <td className="p-4">
                <a
                  href={`/admin/Page/edit?id=${hotel.id}`}
                  className="text-blue-500 mr-4"
                >
                  Edit
                </a>
                <button
                  onClick={() => deleteHotel(hotel.id)}
                  className="text-red-500"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </AdminLayout>
  );
};

export default Page;
