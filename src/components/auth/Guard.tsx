import useGetMe from "../../hooks/useGetMe";
import {JSX, useEffect} from "react";
import excludedRoutes from "../../constants/excluded-routes";
import authenticatedVar from "../../constants/authenticated";

interface GuardProps {
	children: JSX.Element;
}

function Guard({children}: GuardProps) {
	const {data: user, loading} = useGetMe();

	useEffect(() => {
		if(user) {
			authenticatedVar(true)
		}
	}, [user]);

	if (loading) return null;

	return (
		<>
			{excludedRoutes.includes(window.location.pathname) ? children : user && children}
		</>
	)
}

export default Guard;