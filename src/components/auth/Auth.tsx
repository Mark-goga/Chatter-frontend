import {Button, Stack, TextField} from '@mui/material';
import {useState} from 'react';

interface AuthProps {
	submitLabel: string;
	onSubmit: (cred: {email: string, password: string}) => Promise<void>;
	children: React.ReactNode;
}

const Auth = ({onSubmit, submitLabel, children}: AuthProps) => {
	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('')

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
			<Button variant="outlined" onClick={() => onSubmit({email, password})}>{submitLabel}</Button>
		{children}
		</Stack>
	);
};

export default Auth;