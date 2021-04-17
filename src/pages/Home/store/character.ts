import create from "zustand";

type State = {
  id: string;
  actions: {
    set_id: (by: string) => void;
  };
};

const useCharacterStore = create<State>((set) => ({
  id: "1",
  actions: {
    set_id: (by) => set(() => ({ id: by })),
  },
}));

export default useCharacterStore;
