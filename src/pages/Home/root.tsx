import Character from "./components/Character";
import Description from "./components/Description";
import List from "./layouts/List";

interface HomeProps {}
const Home: React.FC<HomeProps> = () => {
  return (
    <div className="m-auto max-w-screen-lg bg-green-700 h-auto min-h-screen ">
      <div className="grid grid-cols-12 gap-5 bg-green-700 ">
        <div className="col-span-8 bg-green-500 flex items-end">
          <div className="bg-red-700 w-full">
            <Description />
          </div>
        </div>
        <div className="col-span-4  bg-red-600">
          <Character />
        </div>
        <div className="col-span-12  bg-red-600">
          <List />
        </div>
      </div>
    </div>
  );
};

export default Home;
