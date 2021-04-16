import { gql } from "@apollo/client/core";
import { useQuery } from "@apollo/client";

const LIST_CHARACTERS = gql`
  query GetCharacters {
    characters {
      results {
        name
        id
        image
      }
    }
  }
`;

export default function ListCharacter() {
  const { loading, error, data } = useQuery(LIST_CHARACTERS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error </p>;
  const result = data!.characters.results;
  // console.log(result);
  return (
    <div>
      {result.map((c: any) => (
        <div key={c.id}>
          <h4>{c.name}</h4>
          <img width={100} height={100} src={c.image} alt={c.name} />
        </div>
      ))}
    </div>
  );
}
