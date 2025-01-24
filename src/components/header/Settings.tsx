import useClickOutSide from "../../hooks/useClickOutSide";
import {useRef} from "react";
import DropMenu from "./DropMenu";
import ListItem from "./ListItem";
import IsModalOpen from "./IsModalOpen";
import useLogout from "../../hooks/useLogout";
import onLogout from "../../utils/onLogout";

interface Props {
	setting: string;
}

function Settings({setting}: Props) {
	const settingsRef = useRef<HTMLDivElement>(null);
	const modalRef = useRef<HTMLDivElement>(null);

	const {isOpen, setIsOpen} = useClickOutSide(settingsRef, modalRef);
	const {logout} = useLogout();

	const handleLogout = async () => {
		await logout();
		onLogout();
	}

	return (
		<div className='relative flex items-center'>
			<div ref={settingsRef} className='size-9 rounded-full bg-gray-300' onClick={() => setIsOpen(true)}>
				<img src={''} alt={'A'}></img>
			</div>

			<IsModalOpen  isModalOpen={isOpen}>
				<DropMenu ref={modalRef} additionalStyle={'top-full right-1/4'}>
					<ListItem item={setting} func={handleLogout} />
				</DropMenu>
			</IsModalOpen>

		</div>
	);
}

export default Settings;