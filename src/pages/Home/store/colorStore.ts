import create from "zustand";

type State = {
  color: string;
  set_color: (by: string) => void;
};

const useColorStore = create<State>((set) => ({
  color: "transparent",
  set_color: (by) => set(() => ({ color: by })),
}));

export default useColorStore;
