import {Link} from "react-router-dom";
import {Link as MUiLink} from '@mui/material';
import Auth from "./Auth";
import useLogin, {LoginRequest} from "../../hooks/useLogin";

const Login = () => {
	const {login, error} = useLogin();

	return (
		<Auth submitLabel={'Login'} onSubmit={(request: LoginRequest) => login(request)}
					error={error}
		>
			<Link to={'/register'} style={{alignSelf:"center"}}>
				<MUiLink>sign up</MUiLink>
			</Link>
		</Auth>
	);
};
export default Login;