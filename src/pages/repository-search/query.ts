import { gql } from '@apollo/client';

/* 
  Approach: 
    1. Fetching all users matching the query string
    2. Fetching login username and repositories list for those users
    3. Fetching name, forkCount, url and updatedAt of those repositories
*/

export const SEARCH_REPOSITORY = gql`
  query searchRepositories($queryString: String!) {
    search(query: $queryString, type: USER, first: 10) {
      edges {
        node {
          ... on User {
            login
            repositories(first: 100, orderBy: { direction: ASC, field: UPDATED_AT }) {
              edges {
                node {
                  ... on Repository {
                    id
                    name
                    forkCount
                    url
                    updatedAt
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;
