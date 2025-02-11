import React from 'react';

interface AuthInputProps {
	type: string;
	value: string;
	placeholder: string;
	handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function AuthInput({type, placeholder , value, handleChange}:AuthInputProps) {
	return (
		<input
			type={type}
			placeholder={placeholder}
			value={value}
			onChange={handleChange}
			className='w-full p-3 pl-9 bg-secondary border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent'
		/>
	);
}

export default AuthInput;