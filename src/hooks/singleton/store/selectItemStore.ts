import { create } from "zustand";
import type { Orchid } from "../../../model/orchid";

interface OrchidStore {
  orchids: Orchid[];
  select: Orchid | null;
  setOrchid: (orchid: Orchid[]) => void;
  setSelect: (select: Orchid | null) => void;
  clearSelected: () => void;
}

export const useOrchidStore = create<OrchidStore>((set) => ({
  orchids: [],
  select: null,

  setOrchid: (orchids: Orchid[]) => set({ orchids }),
  setSelect: (select: Orchid | null) => set({ select }),
  clearSelected: () => set({ select: null }),
}));

//========================================================================
// import { create } from "zustand";
// import { userService, User } from "@/services/userService";

// interface UserState {
//   users: User[];
//   loading: boolean;
//   error: string | null;

//   fetchUsers: () => Promise<void>;
//   addUser: (user: Partial<User>) => Promise<void>;
//   deleteUser: (id: number) => Promise<void>;
// }

// export const useUserStore = create<UserState>((set, get) => ({
//   users: [],
//   loading: false,
//   error: null,

//   fetchUsers: async () => {
//     set({ loading: true, error: null });
//     const { data, error } = await userService.getAll();
//     if (error) set({ error, loading: false });
//     if (data) set({ users: data, loading: false });
//   },

//   addUser: async (user) => {
//     const { data, error } = await userService.create(user);
//     if (error) set({ error });
//     if (data) set({ users: [...get().users, data] });
//   },

//   deleteUser: async (id) => {
//     const { error } = await userService.delete(id);
//     if (error) set({ error });
//     else set({ users: get().users.filter((u) => u.id !== id) });
//   },
// }));
import { persist } from "zustand/middleware";

type SelectedItemStore = {
  selectedItem: Orchid | null;
  setselectedItem: (item: Orchid) => void;
  clearselectedItemm: () => void;
};

export const useSelectedItemStore = create(
  persist<SelectedItemStore>(
    (set) => ({
      selectedItem: null,
      setselectedItem: (item) => set({ selectedItem: item }),
      clearselectedItemm: () => set({ selectedItem: null }),
    }),
    {
      name: "selectd-item-storage",
    }
  )
);
