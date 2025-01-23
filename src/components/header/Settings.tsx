import useClickOutSide from "../../hooks/useClickOutSide";
import {useRef} from "react";
import DropMenu from "./DropMenu";
import ListItem from "./ListItem";
import IsModalOpen from "./IsModalOpen";

interface Props {
	settings: string[];
}

function Settings({settings}: Props) {
	const settingsRef = useRef<HTMLDivElement>(null);

	const {isOpen, setIsOpen} = useClickOutSide(settingsRef);

	return (
		<div className='relative flex items-center'>
			<div ref={settingsRef} className='size-9 rounded-full bg-gray-300' onClick={() => setIsOpen(true)}>
				<img src={''} alt={'A'}></img>
			</div>

			<IsModalOpen isModalOpen={isOpen}>
				<DropMenu additionalStyle={'left-[-200%] bottom-[-450%]'}>
					{settings.map((settings) => (
						<ListItem key={settings} item={settings} func={() => {
						}}/>
					))}
				</DropMenu>
			</IsModalOpen>

		</div>
	);
}

export default Settings;