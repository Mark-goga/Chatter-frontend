import {useEffect, useState} from "react";
import {API_URL} from "../constants/urls";
import {snackVar} from "../constants/snack";
import {UNKNOWN_ERROR_MESSAGE} from "../constants/errors";


const useCountMessage = (chatId: string) => {
	const [messageCount, setMessageCount] = useState<number | undefined>();

	useEffect(() => {
		const handleFetchMessage = async () => {
			const res = await fetch(`${API_URL}/messages/count?chatId=${chatId}`);
			if (!res.ok) {
				snackVar(UNKNOWN_ERROR_MESSAGE);
				return;
			}
			try {
				const {messages} = await res.json();
				setMessageCount(parseInt(messages));
			} catch {
				setMessageCount(undefined);
			}
		}
		handleFetchMessage()
	}, [chatId])

	return {messageCount};
}

export default useCountMessage;