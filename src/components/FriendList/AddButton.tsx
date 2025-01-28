import React, {useRef} from 'react';
import IsModalOpen from "../header/IsModalOpen";
import useClickOutSide from "../../hooks/useClickOutSide";
import AddFriendsModal from "./AddFriendsModal";

function AddButton() {
	const modalRef = useRef<HTMLDivElement>(null);
	const ref = useRef<HTMLButtonElement>(null);
	const {isOpen, setIsOpen} = useClickOutSide(ref, modalRef);

	return (
		<>
			<button
				onClick={() => setIsOpen(!isOpen)}
				ref={ref}
				className="px-4 py-2 bg-accent text-text rounded-full shadow-md hover:bg-neutral transition-colors duration-300 w-max ml-3">
				<span>Add Chat</span>
			</button>

			<IsModalOpen isModalOpen={isOpen} time={75}>
				<AddFriendsModal ref={modalRef} isOpen={isOpen} />
			</IsModalOpen>
		</>
	);
}

export default AddButton;