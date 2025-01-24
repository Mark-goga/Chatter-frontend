import client from "../constants/apollo-client";
import authenticatedVar from "../constants/authenticated";

const onLogout = () => {
	authenticatedVar(false);
	window.location.pathname = "/login";
	client.resetStore();
}
export default onLogout;