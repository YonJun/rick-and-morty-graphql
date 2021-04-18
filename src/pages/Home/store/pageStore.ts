import create from "zustand";

type State = {
  page: number;
  actions: {
    set_page: (by: number) => void;
  };
};

const usePageStore = create<State>((set) => ({
  page: 1,
  actions: {
    set_page: (by) => set(() => ({ page: by })),
  },
}));

export default usePageStore;
