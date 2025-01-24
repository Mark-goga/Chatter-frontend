import React, { forwardRef } from 'react';

interface Props {
	children: React.ReactNode;
	additionalStyle?: string;
}

const DropMenu = forwardRef<HTMLDivElement, Props>(({ children, additionalStyle }, ref) => {
	return (
		<div ref={ref}
			className={`absolute bg-header shadow-gray-700 shadow-sm py-2 flex flex-col rounded-md ${additionalStyle}`}
		>
			{children}
		</div>
	);
});

export default DropMenu;
