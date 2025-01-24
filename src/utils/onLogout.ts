import client from "../constants/apollo-client";

const onLogout = () => {
	window.location.pathname = "/login";
	client.resetStore();
}
export default onLogout;