import React, { forwardRef } from 'react';

interface Props {
	children: React.ReactNode;
	additionalStyle?: string;
	isOpen: boolean;
}

const DropMenu = forwardRef<HTMLDivElement, Props>(({ children, additionalStyle, isOpen }, ref) => {
	return (
		<div ref={ref}
			className={`absolute bg-primary shadow-gray-700 shadow-sm py-2 flex flex-col rounded-md ${additionalStyle} 
			${isOpen ? "animate-fadeIn" : "animate-fadeOut"}`}
		>
			{children}
		</div>
	);
});

export default DropMenu;
