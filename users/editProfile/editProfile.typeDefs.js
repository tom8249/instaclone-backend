import { gql } from "apollo-server";

export default gql`
  type EditProfileResult {
    ok: Boolean!
    error: String
  }
  type Mutation {
    editProfile(
      username: String
      email: String
      name: String
      location: String
      githubUsername: String
      password: String
      bio: String
      avatar: Upload
    ): EditProfileResult!
  }
`;
