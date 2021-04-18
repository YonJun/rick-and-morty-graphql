import { useGetCharactersQuery } from "__generated__/graphql";
import Character from "./components/Character";
import Description from "./components/Description";
import List from "./layouts/List";

interface HomeProps {}
const Home: React.FC<HomeProps> = () => {
  console.log(`render Home`);

  const { data, loading, error } = useGetCharactersQuery();
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
      </div>
    </div>
  );
};

export default Home;
