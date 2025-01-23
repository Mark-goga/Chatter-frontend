const extractErrorMessage = (e: any) => {
	const errorMessage = e.graphQLErrors[0]?.extensions?.originalError?.message;
	if (!errorMessage) {
		return;
	}
	if (Array.isArray(errorMessage)) {
		return errorMessage.reduce((acc: string, errorMessage, index) => {
			if (index === 0) {
				return acc + formatError(errorMessage);
			}
			return acc + ', ' + formatError(errorMessage);
		}, "");
	} else {
		return formatError(errorMessage);
	}
}

const formatError = (errorMessage: string) => {
	return errorMessage.charAt(0).toUpperCase() + errorMessage.slice(1);
}
export {extractErrorMessage};