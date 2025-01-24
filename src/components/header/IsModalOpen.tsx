import React, {useEffect, useState} from 'react';

interface Props {
	children: React.ReactNode;
	isModalOpen: boolean;
}

function IsModalOpen({ isModalOpen, children }: Props) {

	const [showContent, setShowContent] = useState<boolean>(isModalOpen);

	useEffect(() => {
		let timeout: NodeJS.Timeout;
		if (isModalOpen) {
			setShowContent(true);
		} else {
			timeout = setTimeout(() => setShowContent(false), 200);
		}
		return () => clearTimeout(timeout);
	}, [isModalOpen]);

	return showContent ? <div className={!showContent ? 'animate-fadeOut' : ''}>{children}</div> : null;
}

export default IsModalOpen;