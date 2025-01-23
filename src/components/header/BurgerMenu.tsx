import {RxHamburgerMenu} from "react-icons/rx";
import {useRef} from "react";
import ListItem from "./ListItem";
import DropMenu from "./DropMenu";
import useClickOutSide from '../../hooks/useClickOutSide'
import IsModalOpen from "./IsModalOpen";

interface Props {
	pages: string[]
}

function BurgerMenu({pages}: Props) {

	const burgerMenuRef = useRef<HTMLDivElement>(null);
	const {isOpen, setIsOpen} = useClickOutSide(burgerMenuRef);

	return (
		<div className='tablet:block desktop:hidden relative'>
			<div onClick={() => setIsOpen(true)} ref={burgerMenuRef}>
				<RxHamburgerMenu size={30}/>
			</div>

			<IsModalOpen isModalOpen={isOpen}>
				<DropMenu additionalStyle={'left-[-8px] bottom-[-320%]'}>
					{pages.map((page) => (
						<ListItem key={page} item={page} func={() => {
						}}/>
					))}
				</DropMenu>
			</IsModalOpen>

		</div>
	);
}

export default BurgerMenu;