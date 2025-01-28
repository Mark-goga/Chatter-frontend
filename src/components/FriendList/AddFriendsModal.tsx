import {forwardRef} from "react";

interface AddFriendsModalProps {
	isOpen: boolean;
}

const AddFriendsModal = forwardRef<HTMLDivElement, AddFriendsModalProps>(({isOpen}, ref) => {

	return (
		<div ref={ref} className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-1/2 bg-error 
		${isOpen ? 'animate-modalOpen' : 'animate-modalClose'}`}>
			<p>goga</p>
		</div>
	)
});

export default AddFriendsModal;