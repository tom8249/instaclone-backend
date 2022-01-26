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
    avatarURL: String!
    githubUsername: String!
  }
  type Mutation {
    createAccount(
      username: String!
      email: String!
      name: String!
      location: String!
      avatarURL: String!
      githubUsername: String!
      password: String!
    ): User
  }
  type Query {
    seeProfile(username: String!): User
  }
`;
