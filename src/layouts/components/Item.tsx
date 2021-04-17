import { Fragment } from "react";

type ItemProps = {
  name: string;
  image: string;
  species: string;
};

const Item: React.FC<ItemProps> = ({ name, species, image }) => {
  return (
    <Fragment>
      <div>
        <h4>{name}</h4>
        <h5>{species}</h5>
        <img width={100} height={100} src={image!} alt={name!} />
      </div>
    </Fragment>
  );
};

export default Item;
