import { create } from "zustand";

const store = create((set) => ({
    authenticated: false,
    setAuthenticated: (item) => set((state) => ({ authenticated: item })),
    token: null,
    setToken: (item) => set((state) => ({ token: item })),
    user: null,
    setUser: (item) => set((state) => ({ user: item })),
    error:false, text:"", showToast:false, warning:false,
    setError: (item) => set((state) => ({ error: item })),
    setText: (item) => set((state) => ({ text: item })),
    setToast: (item) => set((state) => ({ showToast: item })),
    setWarning: (item) => set((state) => ({ warning: item })),
    
}))

export default store