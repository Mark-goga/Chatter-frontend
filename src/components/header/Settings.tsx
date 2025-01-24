import useClickOutSide from "../../hooks/useClickOutSide";
import {useRef} from "react";
import DropMenu from "./DropMenu";
import ListItem from "./ListItem";
import IsModalOpen from "./IsModalOpen";
import useLogout from "../../hooks/useLogout";
import onLogout from "../../utils/onLogout";
import {snackVar} from "../../constants/snack";
import {UNKNOWN_ERROR_MESSAGE} from "../../constants/errors";
import {FaUserCircle} from "react-icons/fa";

interface Props {
	setting: string;
	userPhoto?: string;
}

function Settings({setting, userPhoto}: Props) {
	const settingsRef = useRef<HTMLDivElement>(null);
	const modalRef = useRef<HTMLDivElement>(null);

	const {isOpen, setIsOpen} = useClickOutSide(settingsRef, modalRef);
	const {logout} = useLogout();

	const handleLogout = async () => {
		try {
			await logout();
			setIsOpen(false);
			onLogout();
		} catch(e) {
			snackVar(UNKNOWN_ERROR_MESSAGE);
		}
	}

	return (
		<div className='relative flex items-center'>
			<div
				ref={settingsRef}
				className="size-9 rounded-full bg-gray-300 cursor-pointer"
				onClick={() => setIsOpen(!isOpen)}
			>
				{userPhoto ? (
					<img src={userPhoto} alt="User" className="rounded-full"/>
				) : (
					<FaUserCircle className="w-full h-full text-gray-500"/>
				)}
			</div>

			<IsModalOpen isModalOpen={isOpen}>
				<DropMenu ref={modalRef} isOpen={isOpen} additionalStyle={'top-full right-1/4'}>
					<ListItem item={setting} func={() => {
						setIsOpen(false);
						handleLogout()
					}}/>
				</DropMenu>
			</IsModalOpen>

		</div>
	);
}

export default Settings;