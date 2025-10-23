// src/hooks/useUsers.ts
import { useEffect, useState } from "react";
import type { Orchid } from "../../model/orchid";

export function useUsers() {
  const [users, setUsers] = useState<Orchid[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchUsers = async () => {
    setLoading(true);
    const { data, error } = await userService.getAll();
    if (error) setError(error);
    if (data) setUsers(data);
    setLoading(false);
  };

  const addUser = async (user: Partial<Orchid>) => {
    const { data, error } = await userService.create(user);
    if (data) setUsers((prev) => [...prev, data]);
    if (error) setError(error);
  };

  const deleteUser = async (id: number) => {
    const { error } = await userService.delete(id);
    if (!error) setUsers((prev) => prev.filter((u) => u.id !== id));
    else setError(error);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return { users, loading, error, fetchUsers, addUser, deleteUser };
}
