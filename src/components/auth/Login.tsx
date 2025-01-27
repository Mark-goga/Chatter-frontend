import {Link} from "react-router-dom";
import Auth from "./Auth";
import useLogin, {LoginRequest} from "../../hooks/useLogin";

const Login = () => {
	const {login, error} = useLogin();

	return (
		<Auth submitLabel={'Login'} onSubmit={(request: LoginRequest) => login(request)}
					error={error}
		>
			<Link to={'/register'} className='text-text text-center underline'>
				<p>sign up</p>
			</Link>
		</Auth>
	);
};
export default Login;