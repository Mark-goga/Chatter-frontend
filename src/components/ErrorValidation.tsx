import React from 'react';

interface ErrorValidationProps {
	error?: string;
}

function ErrorValidation({error}: ErrorValidationProps) {
	return error ? (
		<p className="text-error text-sm font-medium my-1 text-center">
			{error}
		</p>
	) : null;
}
export default ErrorValidation;