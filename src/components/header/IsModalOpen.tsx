import React from 'react';

interface Props {
	children: React.ReactNode;
	isModalOpen: boolean;
}

function IsModalOpen({ isModalOpen, children }: Props) {
	return isModalOpen ? <>{children}</> : null;
}

export default IsModalOpen;