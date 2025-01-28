import React from 'react';

interface ModalBlurBackgroundProps {
	isOpen: boolean;
	children: React.ReactNode;
}

function ModalBlurBackground({isOpen, children}: ModalBlurBackgroundProps) {
	if (isOpen) {
		return (
			<div className="fixed inset-0 z-40 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center">
				{children}
			</div>
		);
	}
	return null;
}

export default ModalBlurBackground;