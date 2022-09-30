import { getProjectVotes } from "./controllers/votes"
import { Resolvers } from "./graphql/__generated__"

const resolvers: Resolvers<{ userId?: string }> = {
  Query: {
    project: async(_, { id }, { userId }) => {
      const votes = await getProjectVotes("1");
      return {
        title: "Let's decide",
        canEdit: userId === "1",
        requiredVotes: 10,
        options: ["Option 1"],
        vote: "Option 1",
        votes,
      }
    }
  }
}

export default resolvers