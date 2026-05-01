import { create } from "zustand"
import Cookies from "js-cookie"

export const authStore = create((set) => {
    token: Cookies.get("jwt") || null
    login: (jwt) => {
        Cookies.set("jwt", jwt, { sameSite: "Strict", secure: true })
        set({ token: jwt });
    }
    logout: () => {
        Cookies.remove("jwt");
        set({ token: null });
    }

})
