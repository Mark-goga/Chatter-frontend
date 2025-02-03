import React, {useEffect, useState} from "react";
import {RiLockPasswordLine} from "react-icons/ri";
import {MdOutlineMailOutline} from "react-icons/md";
import {useNavigate} from "react-router-dom";
import useGetMe from "../../hooks/useGetMe";
import AuthSvg from "./AuthSvg";
import ErrorValidation from "../ErrorValidation";

interface AuthProps {
	submitLabel: string;
	onSubmit: (cred: { email: string; password: string }) => Promise<void>;
	children: React.ReactNode;
	error?: string;
}

const Auth = ({ onSubmit, submitLabel, children, error }: AuthProps) => {
	const [email, setEmail] = useState<string>("");
	const [password, setPassword] = useState<string>("");
	const navigate = useNavigate();
	const { data } = useGetMe();

	const inputStyle = 'w-full p-3 pl-9 bg-secondary border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent';

	useEffect(() => {
		if (data) {
			navigate("/");
		}
	}, [data, navigate]);

	return (
		<div
			className="flex h-screen-minus-90 flex-col max-w-3xl w-[70%] md:w-[50%] xl:w-[30%] mx-auto justify-center text-text">

			<p className='ml-3 mb-1'>Email</p>
			<div className='relative mb-4'>
				<AuthSvg><MdOutlineMailOutline /></AuthSvg>
				<input
					type="email"
					placeholder="youremail@example.com"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					className={`${inputStyle}`}
				/>
			</div>

			<p className='ml-3 mb-1'>Password</p>
			<div className='relative mb-4'>
				<AuthSvg ><RiLockPasswordLine /></AuthSvg>
				<input
					type="password"
					placeholder="Enter your password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					className={`${inputStyle}`}
				/>
			</div>
				<ErrorValidation error={error} />
				<button
					onClick={() => onSubmit({email, password})}
					className="w-full bg-primary text-text font-semibold py-3 rounded-lg hover:bg-primary-dark transition-colors"
				>
					{submitLabel}
				</button>
				<div className="mt-4">{children}</div>
			</div>
	);
};
export default Auth;
