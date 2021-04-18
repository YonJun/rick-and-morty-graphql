import { useCallback, useEffect } from "react";
import { useGetCharactersLazyQuery } from "__generated__/graphql";
import Character from "./components/Character";
import Description from "./components/Description";
import List from "./layouts/List";
import useColorStore from "./store/colorStore";
import usePageStore from "./store/pageStore";

interface HomeProps {}
const Home: React.FC<HomeProps> = () => {
  const page = usePageStore((s) => s.page);
  const set_page = usePageStore((s) => s.actions.set_page);

  const color = useColorStore((s) => s.color);

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
    <div className="m-auto max-w-screen-lg h-auto min-h-screen flex items-center">
      <div className="grid grid-cols-12 gap-5 w-full pb-3">
        <div
          className="col-span-12 grid grid-cols-12 sticky top-0 z-10"
          style={{ backgroundColor: color }}>
          <div className="col-span-8 flex items-end">
            <div className="w-full text-right">
              <Description />
            </div>
          </div>

          <div className="col-span-4">
            <Character />
          </div>
        </div>

        <div className="col-span-12">
          <List
            {...{ data: data ? data.characters.results : [], loading, error }}
          />
        </div>

        <div
          className="col-span-12 text-center font-black sticky bottom-0"
          style={{ backgroundColor: color }}>
          <div className="text-center font-black">
            <span>{page}</span>
          </div>
          <div className="grid grid-cols-12 ">
            <div className="col-span-6">
              <button
                className={`uppercase w-full btn ${
                  !data || (!data.characters.info.prev && "opacity-50")
                }`}
                onClick={handle_prevPage}
                disabled={!data || !data.characters.info.prev}>
                prev
              </button>
            </div>
            <div className="col-span-6">
              <button
                className={`uppercase w-full btn ${
                  !data || (!data.characters.info.next && "opacity-50")
                }`}
                onClick={handle_nextPage}
                disabled={!data || !data.characters.info.next}>
                next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
