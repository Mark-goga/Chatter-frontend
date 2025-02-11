import React from 'react';


interface AuthInputWrapperProps {
	title: string;
	children: React.ReactNode;
}

function AuthInputWrapper({title, children}: AuthInputWrapperProps) {
	return (
		<>
			<p className='ml-3 mb-1'>{title}</p>
			<div className='relative mb-4'>
				{children}
			</div>
		</>
	);
}

export default AuthInputWrapper;