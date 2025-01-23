import {Button, Stack, TextField} from '@mui/material';
import {useEffect, useState} from 'react';
import useGetMe from "../../hooks/useGetMe";
import {useNavigate} from "react-router-dom";

interface AuthProps {
	submitLabel: string;
	onSubmit: (cred: {email: string, password: string}) => Promise<void>;
	children: React.ReactNode;
	error?: string;
}

const Auth = ({onSubmit, submitLabel, children, error}: AuthProps) => {
	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	const navigate = useNavigate();
	const {data} = useGetMe();
	useEffect(() => {
		if (data) {
			navigate('/');
		}
	}, [data, navigate]);

	return (
		<Stack spacing={3} sx={{
			height: '100vh', maxWidth: {
				xs: '70%',
				md: '30%',
			}, margin: '0 auto', justifyContent: 'center'
		}}>
			<TextField
				type="email"
				label="Email"
				variant="outlined"
				value={email}
				onChange={(e) => setEmail(e.target.value)}/>
			<TextField
				type="password"
				label="password"
				variant="outlined" value={password}
				onChange={(e) => setPassword(e.target.value)}/>
			<p className={'text-error text-sm font-medium mt-2 text-center '}>{error}</p>
			<Button variant="outlined" onClick={() => onSubmit({email, password})}>{submitLabel}</Button>
		{children}
		</Stack>
	);
};

export default Auth;