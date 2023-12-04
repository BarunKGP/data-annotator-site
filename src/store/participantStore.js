import { useStore, create } from "zustand";

export const useParticipantStore = create((set) => ({
  name: "",
  email: "",
  logs: [],
  setName: (name) => {
    const nameWords = name.trim().split(" ");
    const firstName = nameWords[0].toLowerCase();
    set({ name: firstName });
  },
  setEmail: (email) => set({ email: email }),
  setLogs: (logs) => set({ logs: logs }),
}));
