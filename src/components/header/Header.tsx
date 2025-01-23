import Branding from "./Branding";
import BurgerMenu from "./BurgerMenu";
import Settings from "./Settings";

const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function Header() {

	const navigate = (s: string) => s;

	return (
		<div className='bg-header flex p-7 justify-between h-[100px] '>
			<BurgerMenu pages={pages}/>
			<div className='flex gap-6 tablet:gap-0'>
				<Branding/>
				<div className='flex items-center justify-center gap-2'>
					<div className='tablet:hidden'>
						{pages.map((page) => (
							<button className='hover:bg-gray-300 rounded-md p-2' key={page} onClick={() => {
								navigate(`/${page}`)
							}}>
								<p className='text-xl'>{page}</p>
							</button>
						))}
					</div>
				</div>
			</div>
			<Settings settings={settings}/>
		</div>
	);
}

export default Header;