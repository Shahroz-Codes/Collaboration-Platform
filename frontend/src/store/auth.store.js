import { create } from "zustand";
import api from "../utils/api"; // your axios instance

export const useAuthStore = create((set) => ({
  user: null,
  isAuthenticated: false,

  signup: async (fullName, email, password) => {
    const res = await api.post("/auth/signup", { fullName, email, password }, { withCredentials: true });
    set({ user: res.data, isAuthenticated: true });
  },

  login: async (email, password) => {
    const res = await api.post("/auth/login", { email, password }, { withCredentials: true });
    set({ user: res.data, isAuthenticated: true });
  },

  logout: async () => {
    await api.post("/auth/logout", {}, { withCredentials: true });
    set({ user: null, isAuthenticated: false });
  },
}));
