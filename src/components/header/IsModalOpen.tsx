import React, {useEffect, useState} from 'react';

interface Props {
	children: React.ReactNode;
	isModalOpen: boolean;
	time: number;
}

function IsModalOpen({ isModalOpen, children, time }: Props) {

	const [showContent, setShowContent] = useState<boolean>(isModalOpen);

	useEffect(() => {
		let timeout: NodeJS.Timeout;
		if (isModalOpen) {
			setShowContent(true);
		} else {
			timeout = setTimeout(() => setShowContent(false), time);
		}
		return () => clearTimeout(timeout);
	}, [isModalOpen, time]);

	return showContent ? <div className={!showContent ? 'animate-fadeOut' : ''}>{children}</div> : null;
}

export default IsModalOpen;