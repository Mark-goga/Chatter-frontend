import { useMutation } from '@apollo/client';
import {graphql} from "../gql";

const createuserDocument = graphql(`
    mutation CreateUser($createUserInput: CreateUserInput!) {
        createUser(createUserInput: $createUserInput) {
            _id
            email
        }
    }
`);

const useCreateUser = () => {
  return useMutation(createuserDocument);
};

export { useCreateUser };