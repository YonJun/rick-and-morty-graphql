import { useCallback, useEffect } from "react";
import { useGetCharactersLazyQuery } from "__generated__/graphql";
import Character from "./components/Character";
import Description from "./components/Description";
import List from "./layouts/List";
import usePageStore from "./store/pageStore";

interface HomeProps {}
const Home: React.FC<HomeProps> = () => {
  const page = usePageStore((s) => s.page);
  const set_page = usePageStore((s) => s.actions.set_page);

  const [getCharacters, { data, loading, error }] = useGetCharactersLazyQuery();

  useEffect(() => {
    getCharacters({
      variables: {
        pageId: page,
      },
    });
  }, [getCharacters, page]);

  const handle_nextPage = useCallback(() => {
    if (data?.characters) {
      set_page(data.characters.info.next);
    }
  }, [data, set_page]);

  const handle_prevPage = useCallback(() => {
    if (data?.characters) {
      set_page(data.characters.info.prev);
    }
  }, [data, set_page]);
  return (
    <div className="bg-green-700 m-auto max-w-screen-lg h-auto min-h-screen flex items-center">
      <div className="bg-green-700 grid grid-cols-12 gap-5 w-full">
        <div className="grid grid-cols-12  col-span-12">
          <div className="bg-green-500 col-span-8 flex items-end">
            <div className="bg-red-700 w-full text-right">
              <Description />
            </div>
          </div>
          <div className="bg-red-600 col-span-4">
            <Character />
          </div>
        </div>
        <div className="bg-red-600 col-span-12">
          <List
            {...{ data: data?.characters?.results || [], loading, error }}
          />
        </div>
        <div className="col-span-12">
          <span>{`current page ${page}`}</span>
        </div>
        <div className="col-span-12">
          <button
            onClick={handle_prevPage}
            disabled={!data || !data.characters.info.prev}>
            prev
          </button>
          <button
            onClick={handle_nextPage}
            disabled={!data || !data.characters.info.next}>
            next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
