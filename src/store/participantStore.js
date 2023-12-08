import { useStore, create } from "zustand";

export const useParticipantStore = create((set) => ({
  name: "",
  email: "",
  test: "",
  subtest: -1,
  logs: [],
  setName: (name) => {
    const nameWords = name.trim().split(" ");
    const firstName = nameWords[0].toLowerCase();
    set({ name: firstName });
  },
  setEmail: (email) => set({ email: email }),
  setLogs: (logs) => set({ logs: logs }),
  setTest: (test) => set({ test: test }),
  setSubTest: (subtest) => set({ subtest: subtest }),
}));
