import { gql } from "apollo-server";

export default gql`
  type User {
    id: String!
    name: String!
    username: String!
    email: String!
    createdAt: String!
    updatedAt: String!
    location: String!
    bio: String
    avatar: String
    githubUsername: String!
  }
`;
