import React from "react";
import { useUsers } from "@/hooks/useUsers";

export default function UserList() {
  const { users, loading, error, addUser, deleteUser } = useUsers();

  if (loading) return <p>Đang tải...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div>
      <h2 className="font-bold text-lg mb-2">Danh sách người dùng</h2>
      <button
        onClick={() => addUser({ name: "Người mới", email: "new@demo.com" })}
        className="bg-blue-500 text-white px-3 py-1 rounded"
      >
        + Thêm user
      </button>
      <ul className="mt-3 space-y-2">
        {users.map((u) => (
          <li key={u.id} className="flex items-center justify-between">
            <span>{u.name}</span>
            <button
              onClick={() => deleteUser(u.id)}
              className="text-red-500 hover:underline"
            >
              Xóa
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
