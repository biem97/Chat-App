import { gql } from "@apollo/client";

export const GET_THEME_MODE = gql`
  query GetThemeModes {
    themeMode @client
  }
`;
