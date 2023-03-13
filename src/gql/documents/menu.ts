import gql from "graphql-tag";

const menuFieldsFragment = gql`
  fragment MenuFields on Menu {
    main
    blog
  }
`;

export const GET_MENU = gql`
  query GetMenu {
    menu {
      data {
        attributes {
          ...MenuFields
          localizations {
            data {
              attributes {
                locale
                ...MenuFields
              }
            }
          }
        }
      }
    }
  }
  ${menuFieldsFragment}
`;
