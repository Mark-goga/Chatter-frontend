import {API_URL} from "../constants/urls";

const useLogout = () => {
	const logout = async () => {
		const res = await fetch(`${API_URL}/auth/logout`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
		});
		if (!res.ok) {
			throw new Error("Failed to logout");
		}
	}

	return {logout};
}
export default useLogout;