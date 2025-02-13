import {useEffect, useState} from "react";
import {API_URL} from "../constants/urls";
import {snackVar} from "../constants/snack";
import {UNKNOWN_ERROR_MESSAGE} from "../constants/errors";


const useCountChats = () => {
	const [chatCount, setChatCount] = useState<number | undefined>();

	useEffect(() => {
		const handleFetchCount = async () => {
			const res = await fetch(`${API_URL}/chats/count`);
			if (!res.ok) {
				snackVar(UNKNOWN_ERROR_MESSAGE);
				return;
			}

			setChatCount(parseInt(await res.text()));
		}
		handleFetchCount()
	}, [])

	return {chatCount};
}

export default useCountChats;