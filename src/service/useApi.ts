import axios from "axios";
import { Warpper } from "../api/wrapper";
import type { Orchid } from "../model/orchid";

//demo
export const userService = {
  getAll: () => Warpper<Orchid[]>(axios.get("/users")),
  getById: (id: number) => Warpper<Orchid>(axios.get(`/users/${id}`)),
  create: (data: Partial<Orchid>) =>
    Warpper<Orchid>(axios.post("/users", data)),
  delete: (id: number) => Warpper<void>(axios.delete(`/users/${id}`)),
};
