import React, {useEffect, useState} from "react";

const useClickOutSide = (
	ref: React.RefObject<HTMLElement | HTMLDivElement | null>,
	modalRef: React.RefObject<HTMLElement | HTMLDivElement | null>) => {

	const [isOpen, setIsOpen] = useState<boolean>(false);

	useEffect(() => {
		const closeModal = (e: MouseEvent) => {
			if (ref?.current && modalRef?.current && !ref.current.contains(e.target as Node) && !modalRef.current.contains(e.target as Node)) {
				setIsOpen(false);
			}
		};

		if (isOpen) {
			document.addEventListener("mousedown", closeModal);
		}

		return () => {
			document.removeEventListener("mousedown", closeModal);
		};
	}, [isOpen, ref, modalRef]);

	return { isOpen, setIsOpen };
};

export default useClickOutSide;
