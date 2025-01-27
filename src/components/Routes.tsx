import { createBrowserRouter } from "react-router-dom";
import Login from "./auth/Login";
import Signup from "./auth/Signup";
import Home from "./home/Home";
import ThemeSelector from "./ThemeSelector/ThemeSelector";

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
	}
]);

export default router;