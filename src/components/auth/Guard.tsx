import useGetMe from "../../hooks/useGetMe";
import {JSX} from "react";
import excludedRoutes from "../../constants/excluded-routes";

interface GuardProps {
	children: JSX.Element;
}

function Guard({children}: GuardProps) {
	const {data: user, loading} = useGetMe();

	if (loading) return null;

	return (
		<>
			{excludedRoutes.includes(window.location.pathname) ? children : user && children}
		</>
	)
}

export default Guard;