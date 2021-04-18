import create from "zustand";
import { CharacterSnippetFragment } from "__generated__/graphql";

type State = {
  char: CharacterSnippetFragment | null;
  actions: {
    set_char: (by: CharacterSnippetFragment) => void;
  };
};

const useCharacterStore = create<State>((set) => ({
  char: null,
  actions: {
    set_char: (by) => set(() => ({ char: by })),
  },
}));

export default useCharacterStore;
