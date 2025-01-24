import Branding from "./Branding";
import BurgerMenu from "./BurgerMenu";
import Settings from "./Settings";
import router from "../Routes";
import Page from "../../interface/Page.interface";
import {useReactiveVar} from "@apollo/client";
import authenticatedVar from "../../constants/authenticated";
import PageList from "./PageList";

const pages: Page[] = [
	{title: 'Home', path: '/'}
];
const unauthenticatedPages: Page[] = [
	{title: 'Login', path: '/login'},
	{title: 'Register', path: '/register'},
]

function Header() {

	const authenticated = useReactiveVar(authenticatedVar);

	return (
		<div className='bg-header flex p-7 justify-between h-[100px] '>
			<BurgerMenu pages={authenticated ? pages : unauthenticatedPages} />
			<div className='flex gap-6 tablet:gap-0'>
				<Branding handleClick={() => authenticated ? router.navigate('/'): router.navigate('/login')}/>
				<PageList pages={authenticated ? pages : unauthenticatedPages} />
			</div>
			{authenticated && <Settings setting={'Logout'}/>}
		</div>
	);
}

export default Header;