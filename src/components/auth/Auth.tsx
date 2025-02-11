import React, {useEffect, useState} from "react";
import {RiLockPasswordLine} from "react-icons/ri";
import {MdOutlineMailOutline} from "react-icons/md";
import {useNavigate} from "react-router-dom";
import useGetMe from "../../hooks/useGetMe";
import AuthSvg from "./AuthSvg";
import ErrorValidation from "../ErrorValidation";
import AuthInputWrapper from "./AuthInputWrapper";
import AuthInput from "./AuthInput";

interface AuthProps {
	submitLabel: string;
	onSubmit: (cred: { email: string; password: string }) => Promise<void>;
	children: React.ReactNode;
	extraFields?: React.ReactNode[];
	error?: string;
}

const Auth = ({onSubmit, submitLabel, children, error, extraFields}: AuthProps) => {
	const [email, setEmail] = useState<string>("");
	const [password, setPassword] = useState<string>("");
	const navigate = useNavigate();
	const { data } = useGetMe();

	useEffect(() => {
		if (data) {
			navigate("/");
		}
	}, [data, navigate]);

	return (
		<div
			className="flex h-screen-minus-90 flex-col max-w-3xl w-[70%] md:w-[50%] xl:w-[30%] mx-auto justify-center text-text">

			<AuthInputWrapper title={'Email'}>
				<AuthSvg><MdOutlineMailOutline /></AuthSvg>
				<AuthInput
					type={"email"}
					value={email}
					placeholder={"youremail@example.com"}
					handleChange={(e) => setEmail(e.target.value)} />
			</AuthInputWrapper>

			{extraFields &&
				(<>
					<AuthInputWrapper title={'Name'}>
						{extraFields}
					</AuthInputWrapper>
				</>)}

			<AuthInputWrapper title={'password'}>
				<AuthSvg ><RiLockPasswordLine /></AuthSvg>
				<AuthInput
					type={"password"}
					value={password}
					placeholder={"Enter your password"}
					handleChange={(e) => setPassword(e.target.value)} />
			</AuthInputWrapper>

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
