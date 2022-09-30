import Vote from "../models/Vote"
import { ulid } from "ulid";

export const createVote = (projectId: string, userId: string) => {
  return Vote.query().insert({
    id: ulid(),
    projectId,
    userId
  })
}

export const getProjectVotes = (projectId: string) => {
  return Vote.query().where({ projectId });
}