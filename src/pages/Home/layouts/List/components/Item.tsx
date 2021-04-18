import { Fragment } from "react";
import { CharacterSnippetFragment } from "__generated__/graphql";

const Item: React.FC<CharacterSnippetFragment> = ({ name, status, image }) => {
  return (
    <Fragment>
      <div>
        <h5>{status}</h5>
        <img width={100} height={100} src={image} alt={name} />
      </div>
    </Fragment>
  );
};

export default Item;
