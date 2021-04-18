import { Fragment } from "react";
import styled from "styled-components";
import { CharacterSnippetFragment } from "__generated__/graphql";

const Img = styled.img`
  height: auto;
  width: 100%;
  max-width: 120px;
  min-height: 120px;
`;

const Item: React.FC<CharacterSnippetFragment> = ({ name, status, image }) => {
  return (
    <Fragment>
      <div>
        {/* <h5>{status}</h5> */}
        <Img className="block rounded-md" src={image} alt={name} />
      </div>
    </Fragment>
  );
};

export default Item;
