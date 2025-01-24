import Branding from "./Branding";
import BurgerMenu from "./BurgerMenu";
import Settings from "./Settings";
import ListItem from "./ListItem";
import router from "../Routes";

const pages = ['Products', 'Pricing', 'Blog'];

function Header() {

	return (
		<div className='bg-header flex p-7 justify-between h-[100px] '>
			<BurgerMenu pages={pages}/>
			<div className='flex gap-6 tablet:gap-0'>
				<Branding handleClick={() => router.navigate('/')}/>
				<div className='flex items-center justify-center gap-2'>
					<div className='tablet:hidden'>
						{pages.map((page) => (
							<ListItem key={page} item={page} func={() => {}} />
						))}
					</div>
				</div>
			</div>
			<Settings setting={'Logout'}/>
		</div>
	);
}

export default Header;