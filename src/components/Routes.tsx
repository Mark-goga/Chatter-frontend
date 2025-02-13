import { createBrowserRouter } from "react-router-dom";
import Login from "./auth/Login";
import Signup from "./auth/Signup";
import Home from "./home/Home";
import ThemeSelector from "./ThemeSelector/ThemeSelector";
import Chat from "./chat/Chat";
import Profile from "./Profile/Profile";


const router = createBrowserRouter([
	{
		path:'/login',
		element: <Login />,
	},
	{
		path:'/register',
		element: <Signup />,
	},
	{
		path: '/',
		element: <Home />
	},
	{
		path: '/themeSelector',
		element: <ThemeSelector />
	},
	{
		path: '/chats/:_id',
		element: <Chat />
	},
	{
		path: '/profile',
		element: <Profile />
	}
]);

export default router;