import useClickOutSide from "../../hooks/useClickOutSide";
import {useRef} from "react";
import DropMenu from "./DropMenu";
import ListItem from "./ListItem";
import IsModalOpen from "./IsModalOpen";
import useLogout from "../../hooks/useLogout";
import onLogout from "../../utils/onLogout";
import {snackVar} from "../../constants/snack";
import {UNKNOWN_ERROR_MESSAGE} from "../../constants/errors";
import UserProfile from "../UserProfile";
import useGetMe from "../../hooks/useGetMe";

interface Props {
	setting: string;
	userPhoto?: string;
}

function Settings({setting, userPhoto}: Props) {
	const settingsRef = useRef<HTMLDivElement>(null);
	const modalRef = useRef<HTMLDivElement>(null);

	const {isOpen, setIsOpen} = useClickOutSide(settingsRef, modalRef);
	const {logout} = useLogout();
	const {data} = useGetMe();
	const username = data?.me.username;

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
		<div className='size-12 relative flex items-center'>
			<div
				ref={settingsRef}
				className="rounded-full cursor-pointer size-full"
				onClick={() => setIsOpen(!isOpen)}
			>
				<UserProfile avatar={userPhoto} name={username ? username : 'Avatar'} />
			</div>

			<IsModalOpen isModalOpen={isOpen} time={200}>
				<DropMenu ref={modalRef} isOpen={isOpen} additionalStyle={'top-full right-1/4'}>
					<ListItem item={setting} func={async () => {
						setIsOpen(false);
						await handleLogout()
					}}/>
				</DropMenu>
			</IsModalOpen>

		</div>
	);
}

export default Settings;