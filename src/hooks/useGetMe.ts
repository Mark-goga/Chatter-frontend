import {useQuery} from "@apollo/client";
import {graphql} from "../gql";

const getMeDocument = graphql(`
	query Me {
			me {
					_id
					email
					username
			}
	}
`);

const useGetMe = () => {
	// @ts-ignore
	return useQuery(getMeDocument);
}
export default useGetMe;