import React from 'react'

interface Props {
	children: React.ReactNode;
	additionalStyle?: string;
}

function DropMenu({children, additionalStyle}: Props) {
	return (
		<div className={`absolute bg-header shadow-gray-700 shadow-sm py-2 flex flex-col rounded-md ${additionalStyle}`}>
			{children}
		</div>
	)
}

export default DropMenu;