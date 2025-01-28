import React, {ReactElement} from "react";

interface AuthSvgProps {
	children: ReactElement<{ className?: string; size?: number }>;
	className?: string;
	size?: number;
}

const AuthSvg = ({ children, className = "", size = 30 }:AuthSvgProps ) => {
	return React.cloneElement(children, {
		className: `absolute top-1/2 translate-y-[-50%] pl-2 text-primary ${className}`,
		size,
	});
};

export default AuthSvg;
