import { Link } from "react-router-dom";
import {Link as MUiLink} from '@mui/material';
import Auth from "./Auth";

const Login = () => {

	return (
		<Auth submitLabel={'Login'} onSubmit={async () => {}}>
			<Link to={'/register'} style={{alignSelf:"center"}}>
				<MUiLink>sign up</MUiLink>
			</Link>
		</Auth>
	);
};
export default Login;