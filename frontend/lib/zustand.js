import { create } from "zustand";

const store = create((set) => ({
    authenticated: false,
    setAuthenticated: (item) => set((state) => ({ authenticated: item })),
    token: null,
    setToken: (item) => set((state) => ({ token: item }))

}))

export default store