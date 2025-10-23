import { create } from "zustand";
import { removeToken, setToken } from "../../../utils/tokent";

interface AuthState {
  user: any | null;
  token: string | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  token: null,
  loading: false,

  login: async (email, password) => {
    set({ loading: true });
    const { data, error } = await useAuthApi.login(email, password);
    if (data) {
      setToken(data.token);
      set({ user: data.user, token: data.token, loading: false });
    } else {
      console.log(error);
      set({ loading: false });
    }
  },

  logout: () => {
    removeToken();
    set({ user: null, token: null });
  },
}));
