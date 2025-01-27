import {RxHamburgerMenu} from "react-icons/rx";
import {useRef} from "react";
import ListItem from "./ListItem";
import DropMenu from "./DropMenu";
import useClickOutSide from '../../hooks/useClickOutSide'
import IsModalOpen from "./IsModalOpen";
import Page from "../../interface/Page.interface";
import router from "../Routes";

interface Props {
	pages: Page[]
}

function BurgerMenu({pages}: Props) {

	const burgerMenuRef = useRef<HTMLDivElement>(null);
	const modalRef = useRef<HTMLDivElement>(null);
	const {isOpen, setIsOpen} = useClickOutSide(burgerMenuRef, modalRef);

	return (
		<div className='tablet:flex desktop:hidden relative items-center text-primary'>
			<div onClick={() => setIsOpen(!isOpen)} ref={burgerMenuRef}>
				<RxHamburgerMenu size={30}/>
			</div>

			<IsModalOpen isModalOpen={isOpen}>
				<DropMenu isOpen={isOpen} ref={modalRef} additionalStyle={`top-full left-1/4`}>
					{pages.map((page) => (
						<ListItem key={page.title} item={page} func={() => {
							setIsOpen(false);
							router.navigate(page.path);
						}}/>
					))}
				</DropMenu>
			</IsModalOpen>

		</div>
	);
}

export default BurgerMenu;