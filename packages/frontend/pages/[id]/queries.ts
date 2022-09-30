import { gql } from "@apollo/client";

export const ProjectQuery = gql`
  query Project($id: Int!) {
    project(id: $id) {
      title
      canEdit
      requiredVotes
      options
      vote
      votes {
        userId
        choice
      }
    }
  }
`;