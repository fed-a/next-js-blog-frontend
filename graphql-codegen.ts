import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: `http://127.0.0.1:1337/graphql`,
  documents: './src/gql/documents/**/*.graphql',
  generates: {
    'src/gql/graphql.ts': {
      plugins: ['typescript', 'typescript-operations', 'typescript-react-apollo'],
    },
  },
};

export default config;
