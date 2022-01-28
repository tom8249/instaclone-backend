import bcrypt from "bcrypt";
import client from "../../client";

export default {
  Mutation: {
    createAccount: async (
      _,
      { username, email, name, location, avatar, githubUsername, password }
    ) => {
      // check if username or email are already on DB.
      try {
        const existingUser = await client.user.findFirst({
          where: {
            OR: [
              {
                username,
              },
              {
                email,
              },
            ],
          },
        });
        if (existingUser) {
          throw new Error(
            "ok:false, error:This username/password is already taken."
          );
        }
        const success = "ok:True";
        const uglyPassword = await bcrypt.hash(password, 10);
        return client.user.create({
          data: {
            username,
            email,
            name,
            location,
            avatar,
            githubUsername,
            password: uglyPassword,
          },
        });
      } catch (e) {
        return e;
      }
    },
  },
};
