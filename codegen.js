module.exports = {
  schema: "https://rickandmortyapi.com/graphql",
  documents: "src/graphql/**/*.graphql",
  overwrite: true,
  generates: {
    "./src/__generated__/graphql.tsx": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-react-apollo",
      ],
      config: {
        avoidOptionals: true,
        maybeValue: "T",
      },
    },
    "./src/__generated__/graphql.schema.json": {
      plugins: ["introspection"],
    },
  },
};
