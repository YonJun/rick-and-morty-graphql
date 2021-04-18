import useCharacterStore from "pages/Home/store/character";
import { Fragment } from "react";
import styled from "styled-components";
import { CharacterSnippetFragment } from "__generated__/graphql";

const Img = styled.img`
  height: auto;
  width: 100%;
  max-width: 120px;
  min-height: 120px;
`;

const Item: React.FC<CharacterSnippetFragment> = (props) => {
  const { name, status, image } = props;
  const set_char = useCharacterStore((s) => s.actions.set_char);
  return (
    <Fragment>
      <div className="cursor-pointer" onClick={() => set_char(props)}>
        <Img className="block rounded-md" src={image} alt={name} />
      </div>
    </Fragment>
  );
};

export default Item;
